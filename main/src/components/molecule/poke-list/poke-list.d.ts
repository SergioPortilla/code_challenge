import { Pokemon } from '@core/domain/pokemon';

export interface PokeListInterface {
  pokemonList: Required<Pokemon>[];
}
