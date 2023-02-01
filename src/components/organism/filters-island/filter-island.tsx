import { FC, useState } from 'react';
import type { ResultApi } from '@core/domain/result-api';
import { createTheme, ThemeProvider } from '@mui/material';
import { getPokemonDetails } from '@core/adapters/get-pokemon-detail';
import type { Pokemon } from '@core/domain/pokemon';
import { getPokemonListByAbility } from '@core/adapters/get-pokemon-list-by-ability';
import { useStore } from '@nanostores/react';
import { showedPokeList } from '@core/store/showed-poke-list.nano';
import { getPokemonListByType } from '@core/adapters/get-pokemon-list-by-type';
import FilterContainer from '@molecule/filter-container/filter-container';
import { pokemonList } from '@core/store/poke-list.nano';
import Button from '@atom/button';
import FilterAutocomplete from '@molecule/filter-autocomplete';
import type { LayoutFilterInterface } from '@layouts/types/layout-filter';


const FilterIsland: FC<LayoutFilterInterface> = ({abilityList, typeList}) => {
  const [temp, setTemp] = useState<string>("");
  const $pokeList = useStore(pokemonList);


  const getByIdOrName = () => {
    getPokemonDetails(undefined, temp)
      .then((pokemon: Pokemon | undefined) => showedPokeList.set(!!pokemon ? [pokemon] : []));
  }

  const handlerList = async (values: ResultApi[], infoApi: (type?: string) => Promise<Pokemon[]>) => {
    showedPokeList.set([]);
    const listPokemon = await Promise.all(values.map(async value => await infoApi(value.name)));
    showedPokeList.set(listPokemon.flat());
  }

  const onChangeAbility = async (abilities: ResultApi[]) => await handlerList(abilities, getPokemonListByAbility);

  const onChangeType = async (types: ResultApi[]) => await handlerList(types, getPokemonListByType);

  const outerTheme = createTheme({palette: {mode: 'dark'}});

  return <FilterContainer>
    <ThemeProvider theme={outerTheme}>
      <FilterAutocomplete
        multiple
        title="Abilities"
        options={abilityList as ResultApi[]}
        getOptionLabel={(option: ResultApi) => option.name}
        onChange={(a, b) => onChangeAbility(b as ResultApi[])}
      />
      <FilterAutocomplete
        title="Pokemon name or id"
        freeSolo
        options={Object.keys($pokeList)}
        getOptionLabel={(option: string) => option}
        onChange={(a, b) => setTemp(b as string)}
        onInput={(a) => setTemp(a.target.value as string)}
      >
        <Button onClick={getByIdOrName}><img src="/assets/svg/search.svg" alt="alt"/></Button>
      </FilterAutocomplete>
      <FilterAutocomplete
        multiple
        title="Types"
        options={typeList as ResultApi[]}
        getOptionLabel={(option: ResultApi) => option.name}
        onChange={(_a, value) => onChangeType(value as ResultApi[])}
      />

    </ThemeProvider>
  </FilterContainer>
}

export default FilterIsland;
