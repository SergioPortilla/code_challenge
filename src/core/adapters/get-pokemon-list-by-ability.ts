import { API_ROUTE } from '@core/const/api-route';
import type { Pokemon } from '@core/domain/pokemon';
import type { Ability } from '@core/domain/ability';

type getAbilityListType = (ability?: string) => Promise<Pokemon[]>;

export const getPokemonListByAbility: getAbilityListType = (ability: string = "") => {
  const url = import.meta.env.PUBLIC_POKE_API + API_ROUTE.ability + ability;

  return fetch(url)
    .then<Ability>(res => res.json())
    .then(res => res.pokemon.map(({pokemon}) => pokemon))
    .catch(err => err);
}
