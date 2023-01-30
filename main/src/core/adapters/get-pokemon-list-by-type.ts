import { API_ROUTE } from '@core/const/api-route';
import type { Pokemon } from '@core/domain/pokemon';
import type { Ability } from '@core/domain/ability';


type getPokemonListByTypeType = (type?: string) => Promise<Pokemon[]>;

export const getPokemonListByType: getPokemonListByTypeType = (type: string = "") => {
  const url = import.meta.env.PUBLIC_POKE_API + API_ROUTE.type + type;

  return fetch(url)
    .then<Ability>(res => res.json())
    .then(res => res.pokemon.map(({pokemon}) => pokemon))
    .catch(err => err);
}
