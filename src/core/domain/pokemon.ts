import type { ResultApi } from '@core/domain/result-api';
import type { Sprites } from '@core/domain/sprites';
import type { Type } from '@core/domain/type';
import type { Abilities } from '@core/domain/abilities';

export interface Pokemon extends ResultApi {
  held_items: string[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  order: number;
  sprites: Sprites;
  types: Type[];
  stats: Stat[];
  abilities: Abilities[];
  moves: [];
  height: number;
  weight: number;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: ResultApi;
}
