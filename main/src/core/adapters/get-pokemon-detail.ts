export const getPokemonDetails: (url: string) => any = (url) => {
  return fetch(url)
    .then(res => res.json())
    .then(res => res)
    .catch(err => err);
};
