export const getPokemon: () => any = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=152offset=0')
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));
};
