import type { PokemonTypes } from '@core/types/pokemon-types';
import type { ResultApi } from '@core/domain/result-api';

export interface Type {
    slot: number;
    type: ResultApi<PokemonTypes>;
}
