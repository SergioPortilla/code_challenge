import type { FC } from 'react';
import type { PokeImageInterface } from './poke-image.d';
import { PokeImageBackground, PokeImageTitle } from '@atom/poke-image/poke-image.styled';

const PokeImage: FC<PokeImageInterface> = ({img, name, background}) => {
  return <PokeImageBackground background={background}>
    <img src={img} alt={name}/>
    <PokeImageTitle>{name}</PokeImageTitle>
  </PokeImageBackground>
}

export default PokeImage;
