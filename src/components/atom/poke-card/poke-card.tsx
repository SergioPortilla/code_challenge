import type { FC } from 'react';
import type { PokeCardInterface } from './poke-card.d';
import type { PokemonConfigInterface } from '@core/types/pokemon-types';
import type { Type } from '@core/domain/type';
import { getPokemonTypeImage, PokemonTypeConfig } from '@core/const/pokemon-type';
import {
  CardBackground,
  CardFooter,
  CardId,
  CardImage,
  CardImageLoad,
  CardText,
  CarTypeContainer,
  Content,
  RibbonCard,
  RibbonCardBack
} from '@atom/poke-card/poke-card.styled';
import Icon from '@atom/icon';

const PokeCard: FC<PokeCardInterface> = ({ poke }) => {
  const getConfig = (type: Type) => PokemonTypeConfig[type.type.name];

  const firstType: PokemonConfigInterface = poke.types ? getConfig(poke.types[0]) : PokemonTypeConfig.none ;
  const backgroundColors = poke.types?.map(type => getConfig(type).background) || [PokemonTypeConfig.none.background]
  const image = poke.types && poke.sprites.other['official-artwork'].front_default;
  const abilities = poke.abilities?.map(ability => ability.ability.name).join(", ");

  return (
    <Content {...firstType}>
      <CardBackground background={backgroundColors}>
        <CardId>{poke.id}</CardId>
        { !poke.types ?
          <CardImageLoad src="/assets/pokeball_loading.gif" alt="loading"/> :
          <CardImage src={image} alt={`${poke.id}`}/>
        }
      </CardBackground>
      <CardFooter>
        <RibbonCardBack {...firstType} />
        <RibbonCard {...firstType} >{poke.name}</RibbonCard>
        <CardText>{abilities}</CardText>
        <CarTypeContainer>
          {poke.types?.map((type: Type) =>
            <Icon key={type.type.name} alt={type.type.name} src={getPokemonTypeImage(type.type.name)}/>)}
        </CarTypeContainer>
      </CardFooter>
    </Content>
  );
};

export default PokeCard;
