import type { ChangeEvent, FC } from 'react';
import type { ResponseApi } from '@core/domain/response-api';
import type { Pokemon } from '@core/domain/pokemon';
import { getPokemonList } from '@core/adapters/get-pokemon-list';
import { showedPokeList } from '@core/store/showed-poke-list.nano';
import { config } from '@core/store/config,nano';
import { useStore } from '@nanostores/react';
import PaginationBar from '@molecule/pagination-bar/pagination-bar';
import type { SelectChangeEvent } from '@mui/material';
import { ITEMS_PAGINATION_OPTIONS } from '@core/const/items-pagination-options';

const PaginationIsland: FC = () => {
  const $config = useStore(config);

  const searchPokemonList = (url?: URL, filter = {}) => {
    const params = new URLSearchParams(filter).toString()
    getPokemonList(url, params)
      .then((response: ResponseApi<Pokemon[]>) => {
        config.setKey('pokeAmount', response.count);
        showedPokeList.set(response.results);
      })
  }
  const onChangeLimit = (event: SelectChangeEvent) => {
    const limit = +event.target.value;
    config.set({limit, offset: 0, page: 1});
    searchPokemonList(undefined, {limit, offset: $config.offset});
  }

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    const {limit} = $config;
    config.setKey('page', value);
    config.setKey('offset', limit * (value - 1));
    searchPokemonList(undefined, {limit, offset: limit * (value - 1)});
  };

  return <PaginationBar
    pagination={$config}
    handleChange={handleChange}
    handleLimit={onChangeLimit}
    selectOptions={ITEMS_PAGINATION_OPTIONS}/>
}

export default PaginationIsland;
