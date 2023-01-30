import type { FC, ChangeEvent } from 'react';
import type { ResponseApi } from '@core/domain/response-api';
import type { Pokemon } from '@core/domain/pokemon';
import SelectInput from '@atom/input/select/select-input';
import { getPokemonList } from '@core/adapters/get-pokemon-list';
import { showedPokeList } from '@core/store/showed-poke-list.nano';
import { config } from '@core/store/config,nano';
import { useStore } from '@nanostores/react';

const PaginationIsland: FC = () => {
  const $config = useStore(config);

  const searchPokemonList = (url?: URL, filter= {}) => {
    const params = new URLSearchParams(filter).toString()
    getPokemonList(url, params)
      .then((response: ResponseApi<Pokemon[]>) => {
        config.setKey('prev', response.previous);
        config.setKey('next', response.next);
        config.setKey('pokeAmount', response.count);
        showedPokeList.set(response.results);
      })
  }
  const onChange= (a: ChangeEvent<HTMLInputElement>) => {
    const limit = +a.target.value;
    config.set({ limit, offset: 0, page: 1});
    searchPokemonList(undefined, {limit, offset: $config.offset});
  }
  const algo = () => {
    searchPokemonList($config.next);
  }

  return <>
    <div onClick={algo}>next</div>
    <SelectInput onSelect={onChange} />
  </>
}

export default PaginationIsland;
