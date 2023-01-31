import { FC, useEffect, useState } from 'react';
import type { ResultApi } from '@core/domain/result-api';
import { createTheme, ThemeProvider } from '@mui/material';
import { getPokemonDetails } from '@core/adapters/get-pokemon-detail';
import type { Pokemon } from '@core/domain/pokemon';
import { getPokemonListByAbility } from '@core/adapters/get-pokemon-list-by-ability';
import { useStore } from '@nanostores/react';
import { showedPokeList } from '@core/store/showed-poke-list.nano';
import { getPokemonListByType } from '@core/adapters/get-pokemon-list-by-type';
import type { PageLayoutProps } from '@layouts/layout';
import FilterContainer from '@molecule/filter-container/filter-container';
import { pokemonList } from '@core/store/poke-list.nano';
import Button from '@atom/button';
import FilterAutocomplete from '@molecule/filter-autocomplete';


const FilterIsland: FC<PageLayoutProps & any> = ({abilityList, typeList}) => {
  const [abilities, setAbilities] = useState<ResultApi[]>();
  const [types, setTypes] = useState<ResultApi[]>();
  const [temp, setTemp] = useState<string>("");
  const $showedPokeList = useStore(showedPokeList);
  const $pokeList = useStore(pokemonList);

  useEffect(() => {
    setAbilities(abilityList);
    setTypes(typeList);
  }, []);

  const getByIdOrName = () => {
    getPokemonDetails(undefined, temp)
      .then((pokemon: Pokemon | undefined) => showedPokeList.set(!!pokemon ? [pokemon] : []));
  }

  const onChange = async (abilities: ResultApi[]) => {
    showedPokeList.set([])
    abilities.map(async ability => {
      await getPokemonListByAbility(ability.name)
        .then(a => showedPokeList.set(a))
    })
  }

  const onChangeType = async (types: ResultApi[]) => {
    showedPokeList.set([]);
    types.map(async ability => {
      await getPokemonListByType(ability.name)
        .then(a => showedPokeList.set(a))
    })
  }

  const outerTheme = createTheme({palette: {mode: 'dark'}});

  return <FilterContainer>
    <ThemeProvider theme={outerTheme}>
      <FilterAutocomplete
        multiple
        title="Abilities"
        options={abilities as ResultApi[]}
        getOptionLabel={(option: ResultApi) => option.name}
        onChange={(a, b) => onChange(b as ResultApi[])}
      />
      <FilterAutocomplete
        title="Pokemon name or id"
        freeSolo
        options={Object.keys($pokeList)}
        getOptionLabel={(option: string) => option}
        onChange={(a, b) => {
          console.log(b)
          setTemp(b as string)
        }}
      >
        <Button onClick={getByIdOrName}><img src="/assets/svg/search.svg" alt="alt"/></Button>
      </FilterAutocomplete>
      <FilterAutocomplete
        multiple
        title="Types"
        options={types as ResultApi[]}
        getOptionLabel={(option: ResultApi) => option.name}
        onChange={(_a, value) => onChangeType(value as ResultApi[])}
      />

    </ThemeProvider>
  </FilterContainer>
}

export default FilterIsland;
