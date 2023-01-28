import type { Pokemon } from '@core/domain/pokemon';

type getPokemonDetailsType = (url: URL) => Promise<Pokemon>;

export const getPokemonDetails: getPokemonDetailsType = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};
