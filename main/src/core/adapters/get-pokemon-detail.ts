import type { Pokemon } from '@core/domain/pokemon';
import { API_ROUTE } from '@core/const/api-route';

type getPokemonDetailsType = (url?: URL, params?: string | number) => Promise<Pokemon>;

export const getPokemonDetails: getPokemonDetailsType = (url, params = "") => {
  const urlApi = import.meta.env.PUBLIC_POKE_API + API_ROUTE.pokemon + params;

  return fetch(url || urlApi)
    .then<Pokemon>(res => res.json())
    .catch(err => {
      console.log(err);
      return undefined;
    });
};
