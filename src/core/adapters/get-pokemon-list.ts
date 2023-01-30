import type { ResponseApi } from '@core/domain/response-api';
import type { ResultApi } from '@core/domain/result-api';
import type { Pokemon } from '@core/domain/pokemon';
import { API_ROUTE } from '@core/const/api-route';

type getPokemonType = (url?: URL, params?: string) => Promise<ResponseApi<Pokemon[]>>;

export const getPokemonList: getPokemonType = (url, params = "") => {
  const urlApi = import.meta.env.PUBLIC_POKE_API + API_ROUTE.pokemon + (params && `?${params}`);

  return fetch(url || urlApi)
    .then<ResponseApi<Pick<Pokemon, keyof ResultApi>[]>>(res => res.json())
    .catch(err => err);
};
