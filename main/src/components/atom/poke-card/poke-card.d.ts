import type { Pokemon } from '@core/domain/pokemon';
import type { Type } from '@core/domain/type';

export interface PokeCardInterface {
  types: Type[];
  poke: Pokemon;
}

export interface PokeTypeColor {
  color: string;
}
export interface PokeTypeBackground {
  background: string[];
}

