import { map } from 'nanostores';

export interface PaginationInterface {
  limit: number;
  offset: number;
  page: number;
  pokeAmount?: number;
}

export const config = map<PaginationInterface>({
  limit: 10, offset: 0, page: 1
})
