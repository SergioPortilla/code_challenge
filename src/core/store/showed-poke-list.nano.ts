import { atom } from 'nanostores';
import type { Pokemon } from '@core/domain/pokemon';
import { getPokemonDetails } from '@core/adapters/get-pokemon-detail';
import { pokemonList } from '@core/store/poke-list.nano';

export const showedPokeList = atom<Pokemon[]>([])

showedPokeList.listen((value) => {
  !!value && value.map((pokemon) => {
      console.log("algo")
      if (!pokemonList.get()[pokemon.name].types) {
        if (!pokemon.types) {
          getPokemonDetails(pokemon.url)
            .then((response: Pokemon | undefined) => pokemonList.setKey(pokemon.name, response!))
        } else {
          pokemonList.setKey(pokemon.name, pokemon);
        }
      }
    }
  );
})
