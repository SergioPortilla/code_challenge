export const getSinglePokemon: (params: string) => any = (params) => {
  const api = import.meta.env.POKE_API || 'https://pokeapi.co/api/v2/pokemon';
  return fetch(`${api}/${params}`)
    .then(res => res.json())
    .catch(err => console.log(err));
};
