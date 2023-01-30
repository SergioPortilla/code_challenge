import { map, onMount } from 'nanostores'
import type { Pokemon } from '@core/domain/pokemon';
import { getPokemonList } from '@core/adapters/get-pokemon-list';
import type { ResponseApi } from '@core/domain/response-api';

export const pokemonList = map<Record<string, Pokemon>>(undefined)

onMount(pokemonList, () => {
  console.log("called pokeList")
  if (pokemonList.get()) {
    getPokemonList(undefined,"limit=1279")
      .then((value: ResponseApi<Pokemon[]>)  => {
        const allPokemon = value.results
          .map(w => ({[w.name as string]: w}))
          .reduce((a, p) => ({...a, ...p}), {});
        pokemonList.set(allPokemon);
      });
  }
})
