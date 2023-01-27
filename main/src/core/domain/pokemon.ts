import type { PokemonDetail } from '@core/domain/pokemon-detail';

export interface Pokemon extends PokemonDetail {
    name: string;
    url: string;
}
