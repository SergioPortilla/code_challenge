import { map } from 'nanostores';

export interface configValue {
  limit: number;
  offset: number;
  page: number;
  prev?: URL;
  next?: URL;
  pokeAmount?: number;
}

export const config = map<configValue>({
  limit: 5, offset: 0, page: 1
})
