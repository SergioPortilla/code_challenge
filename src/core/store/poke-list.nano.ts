import { map, onMount } from 'nanostores'
import type { Pokemon } from '@core/domain/pokemon';
import { getPokemonList } from '@core/adapters/get-pokemon-list';
import type { ResponseApi } from '@core/domain/response-api';

export const pokemonList = map<Record<string, Pokemon>>(undefined)

onMount(pokemonList, () => {
  console.log("called pokeList")
  if (pokemonList.get()) {
    getPokemonList(undefined, `limit=${import.meta.env.PUBLIC_MAIN_POKE_AMOUNT}`)
      .then((value: ResponseApi<Pokemon[]>) => {
        const allPokemon = value.results
          .map(poke => ({[poke.name as string]: poke}))
          .reduce((previous, currentPoke) => ({...previous, ...currentPoke}), {});
        pokemonList.set(allPokemon);
      });
  }
})
