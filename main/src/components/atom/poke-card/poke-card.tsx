import type { FC } from 'react';
import type { PokeCardInterface } from './poke-card.d';
import type { PokemonConfigInterface } from '@core/types/pokemon-types';
import { PokemonTypeConfig } from '@core/const/pokemon-type';
import {
  CardBackground,
  CardFooter,
  CardId,
  CardImage, CardText, CardType, CarTypeContainer, Content,
  RibbonCard,
  RibbonCardBack
} from '@atom/poke-card/poke-card.styled';

const PokeCard: FC<PokeCardInterface> = ({ types, poke }) => {
  const firstType: PokemonConfigInterface = PokemonTypeConfig[types[0].type.name];

  const image = poke.sprites.other ? poke.sprites.other['official-artwork'].front_default : poke.sprites.front_default;
  return (
    <Content>
      <CardBackground color={firstType.background}>
        <CardId>{poke.id}</CardId>
        <CardImage src={image} alt={poke.id.toString()}/>
      </CardBackground>
      <CardFooter>
        <RibbonCardBack color={firstType.color} />
        <RibbonCard color={firstType.color} >{poke.name}</RibbonCard>
        <CardText>{poke.abilities.map(ability => ability.ability.name).join(", ")}</CardText>
        <CarTypeContainer>
        {types.map(type => <CardType src={PokemonTypeConfig[type.type.name].image}/>)}
        </CarTypeContainer>
      </CardFooter>
    </Content>
  );
};

export default PokeCard;
