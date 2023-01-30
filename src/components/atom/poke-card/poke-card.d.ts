import type { Pokemon } from '@core/domain/pokemon';

export interface PokeCardInterface {
  poke: Pokemon;
}

export interface PokeTypeColor {
  color: string;
}

export interface PokeTypeBackground {
  background: string[];
}

