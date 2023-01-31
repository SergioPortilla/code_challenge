import type { ResultApi } from '@core/domain/result-api';
import type { Pokemon } from '@core/domain/pokemon';

export interface Ability extends ResultApi {
  effect_changes: [];
  effect_entries: [];
  flavor_text_entries: [];
  generation: [];
  id: number;
  is_main_series: boolean;
  names: [];
  pokemon: AbilityPokemon[];
}

interface AbilityPokemon {
  pokemon: Pokemon
}
