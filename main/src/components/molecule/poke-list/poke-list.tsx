import type { FC } from 'react';
import PokeCard from '@atom/poke-card';
import type { PokeListInterface } from '@molecule/poke-list/poke-list.d';
import { Content, EmptyListContainer, EmptyListImage } from './poke-list.styled';


const PokeList: FC<PokeListInterface> = ({showedPokemonList, pokemonList}) => {

  return (
    <Content>
      {!!showedPokemonList.length ? showedPokemonList.map(pokemon =>
        <PokeCard key={pokemon.name} poke={pokemonList[pokemon.name]}/>) :
        <EmptyListContainer>
          <EmptyListImage src="/assets/not_found.png" alt="pokemon not found"/>
        </EmptyListContainer>
      }
    </Content>
  )
}

export default PokeList;
