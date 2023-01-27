import type { FC } from 'react';
import { useEffect, useState } from 'react';
import PokeCard from '@atom/poke-card/poke-card';
import { getPokemon } from '@core/adapters/get-pokemon';
import { getPokemonDetails } from '@core/adapters/get-pokemon-detail';
import type { Pokemon } from '@core/domain/pokemon';


const PokeList: FC<any> = ({_children}) => {
  const [pokemonList, setPokemonList] = useState<Array<Pokemon>>([]);

  useEffect(() => {
    (async () => {
      const algo = (await getPokemon()).results;
      const esto = await Promise.all(algo.map((pokemon: any) => getPokemonDetails(pokemon.url)))
      console.log(esto);
      setPokemonList(esto);
    })();
  }, []);


  return <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center'}}>{!!pokemonList.length &&
    pokemonList.map(pokemon =>
      <PokeCard key={pokemon.id} poke={pokemon} types={pokemon.types}/>)}</div>
}

export default PokeList;
