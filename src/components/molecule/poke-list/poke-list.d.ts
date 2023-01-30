import { Pokemon } from '@core/domain/pokemon';

export interface PokeListInterface {
  showedPokemonList: Required<Pokemon>[];
  pokemonList: Record<string, Pokemon>;
}
