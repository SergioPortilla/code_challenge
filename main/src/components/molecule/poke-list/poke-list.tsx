import type { FC } from 'react';
import PokeCard from '@atom/poke-card/poke-card';
import type { PokeListInterface } from '@molecule/poke-list/poke-list.d';


const PokeList: FC<PokeListInterface> = ({pokemonList}) => {

  return <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center'}}>{!!pokemonList.length &&
    pokemonList.map(pokemon =>
      <PokeCard key={pokemon.name} poke={pokemon} types={pokemon.types}/>)}</div>
}

export default PokeList;
