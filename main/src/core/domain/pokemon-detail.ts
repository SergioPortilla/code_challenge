import type { Sprites } from '@core/domain/sprites';
import type { Type } from '@core/domain/type';
import type { Abilities } from '@core/domain/abilities';

export interface PokemonDetail {
    held_items: string[];
    id: number;
    is_default: boolean
    location_area_encounters: string;
    order: number
    sprites: Sprites;
    types: Type[];
    abilities: Abilities[];
}
