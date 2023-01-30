import type { FC } from 'react';
import { useEffect } from 'react';
import type { Pokemon } from '@core/domain/pokemon';
import PokeList from '@molecule/poke-list';
import { getPokemonList } from '@core/adapters/get-pokemon-list';
import type { ResponseApi } from '@core/domain/response-api';
import { useStore } from '@nanostores/react';
import { showedPokeList } from '@core/store/showed-poke-list.nano';
import { pokemonList } from '@core/store/poke-list.nano';
import { config } from '@core/store/config,nano';

const MainIsland: FC = () => {
  const $showedPokeList = useStore(showedPokeList);
  const $pokeList = useStore(pokemonList);
  const $config = useStore(config);

  const searchPokemonList = (filter= {}) => {
    const params = new URLSearchParams(filter).toString();
    getPokemonList(undefined, params)
      .then((response: ResponseApi<Pokemon[]>) => {
        config.setKey('prev', response.previous);
        config.setKey('next', response.next);
        config.setKey('pokeAmount', response.count);
        showedPokeList.set(response.results);
      });
  }

  useEffect(() => {
    const {limit, offset} = $config;
    searchPokemonList({limit, offset});
  }, []);

  return <PokeList showedPokemonList={$showedPokeList} pokemonList={$pokeList}/>

}

export default MainIsland;
