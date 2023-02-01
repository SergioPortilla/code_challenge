import styled, { css } from 'styled-components';
import type { PokeTypeBackground } from './poke-image.d';

export const PokeImageBackground = styled.div<PokeTypeBackground>`
  max-width: 34rem;
  padding: 1rem;
  position: relative;

  ${({background}) => css`
    background-image: linear-gradient(0deg, ${background[0]} 5%, ${background[1] || background[0]} 100%)`
  };
`

export const PokeImageTitle = styled.div`
  position: absolute;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(35, 35, 35, 1) 40%);
  color: white;
  padding: 1rem;
  width: 100%;
  left: 0;
  bottom: 2rem;
  min-height: 3rem;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`
