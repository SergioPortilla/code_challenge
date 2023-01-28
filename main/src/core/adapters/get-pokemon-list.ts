import type { ResponseApi } from '@core/domain/response-api';
import type { Pokemon } from '@core/domain/pokemon';

type getPokemonType = (params: string) => Promise<ResponseApi<Pokemon[]>>;

export const getPokemonList: getPokemonType = (params) => {
  const api = import.meta.env.POKE_API || 'https://pokeapi.co/api/v2';
  console.log("Faith");
  console.log(import.meta.env.POKE_API);
  return fetch(`${api}/pokemon${params && `?${params}`}`)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));
};
