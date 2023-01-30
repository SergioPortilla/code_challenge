import type { Pokemon } from '@core/domain/pokemon';
import type { Type } from '@core/domain/type';

export interface PokeCardInterface {
  poke: Pokemon;
}

export interface PokeTypeColor {
  color: string;
}
export interface PokeTypeBackground {
  background: string[];
}

