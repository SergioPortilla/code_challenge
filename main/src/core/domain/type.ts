import type { PokemonTypes } from '@core/types/pokemon-types';

export interface Type {
    slot: number;
    type: {name: PokemonTypes, url: string}
}
