import { FC, useEffect, useState } from 'react';
import type { ResultApi } from '@core/domain/result-api';
import { getAbilityList } from '@core/adapters/get-ability-list';
import { getTypeList } from '@core/adapters/get-type-list';
import { Autocomplete, TextField } from '@mui/material';
import { getPokemonDetails } from '@core/adapters/get-pokemon-detail';
import type { Pokemon } from '@core/domain/pokemon';
import { getPokemonListByAbility } from '@core/adapters/get-pokemon-list-by-ability';
import { useStore } from '@nanostores/react';
import { showedPokeList } from '@core/store/showed-poke-list.nano';
import { getPokemonListByType } from '@core/adapters/get-pokemon-list-by-type';
import type { PageLayoutProps } from '@layouts/layout';

const FilterIsland: FC<PageLayoutProps> = () => {
  const [abilities, setAbilities] = useState<ResultApi[]>();
  const [types, setTypes] = useState<ResultApi[]>();
  const [temp, setTemp] = useState<string>("");
  const $showedPokeList = useStore(showedPokeList);

  useEffect(() => {
    getAbilityList()
      .then((response: ResultApi[]) => setAbilities(response));
    getTypeList()
      .then((response: ResultApi[]) => setTypes(response));
  }, []);

  const esto = () => {
    getPokemonDetails(undefined, temp)
      .then((pokemon: Pokemon) => showedPokeList.set(!!pokemon && [pokemon]));
  }

  const onChange = async (abilities: ResultApi[]) => {
    showedPokeList.set([])
    abilities
      .map(async ability => {
        await getPokemonListByAbility(ability.name)
          .then(a => showedPokeList.set([...$showedPokeList, ...a]))
      })
  }

  const onChangeType = async (abilities: ResultApi[]) => {

    showedPokeList.set([]);
    abilities
      .map(async ability => {
        await getPokemonListByType(ability.name)
          .then(a => showedPokeList.set([...$showedPokeList, ...a]))
      })
  }

  return <div style={{display: 'flex'}}>
    {!!abilities &&
      <Autocomplete
        multiple
        options={abilities}
        getOptionLabel={(option) => option.name}
        onChange={(a, b) => onChange(b)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
    }
    <input type="text" onChange={a => setTemp(a.target.value)}/>
    <button onClick={esto}>algo</button>

    {!!types &&
      <Autocomplete
        multiple
        options={types}
        getOptionLabel={(option) => option.name}
        onChange={(a, value) => onChangeType(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
    }
  </div>
}

export default FilterIsland;
