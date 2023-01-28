import type { ResponseApi } from '@core/domain/response-api';
import type { ResultApi } from '@core/domain/result-api';

type getAbilitiesType = (ability?: string) => Promise<ResponseApi<ResultApi[]>>;

export const getAbilities: getAbilitiesType = (ability: string = "") => {
  const api = import.meta.env.POKE_API || 'https://pokeapi.co/api/v2';
  return fetch(`${api}/ability/${ability}`)
    .then(res => res.json())
    .catch(err => console.log(err));
}
