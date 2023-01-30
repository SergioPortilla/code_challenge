import type { ResponseApi } from '@core/domain/response-api';
import type { ResultApi } from '@core/domain/result-api';
import { API_ROUTE } from '@core/const/api-route';

type getAbilityListType = (ability?: string) => Promise<ResultApi[]>;

export const getAbilityList: getAbilityListType = (ability: string = "") => {
  const url = import.meta.env.PUBLIC_POKE_API + API_ROUTE.ability + ability;

  return fetch(url)
    .then<ResponseApi<ResultApi[]>>(res => res.json())
    .then<ResultApi[]>(res => res.results)
    .catch(err => err);
}
