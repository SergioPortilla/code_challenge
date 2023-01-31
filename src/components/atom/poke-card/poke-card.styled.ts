import styled, { css } from "styled-components";
import type { PokeTypeBackground, PokeTypeColor } from "./poke-card.d";

export const CardTransitions = css`
  transition: background-color 0.4s ease-in-out, width 0.6s ease-in-out, transform .15s cubic-bezier(.4, 0, .2, 1);
`;

export const CardFooter = styled.div`
  background-color: #313131;
  height: 3rem;
  position: relative;
  padding: 3.5rem 1rem 1rem 1rem;
  border-radius: 0 0 1rem 1rem;
`

export const RibbonCardBack = styled.div<PokeTypeColor>`
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 0.7rem solid ${({color}) => color};
  filter: brightness(50%);
  left: -0.7rem;
  top: 0.3rem;
  border-left: 0.7rem solid transparent;
  ${CardTransitions};
`

export const RibbonCard = styled.div<PokeTypeColor>`
  position: absolute;
  background-color: ${({color}) => color};
  box-shadow: rgb(0 0 0 / 15%) 0.6rem -0.7rem 0.3rem 0;
  height: 2rem;
  min-width: 4rem;
  left: -0.7rem;
  top: 1rem;
  z-index: 3;
  color: white;
  font-weight: bold;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  ${CardTransitions};
`

export const CardText = styled.div`
  color: white;
  max-width: 12rem;
`

export const CardBackground = styled.div<PokeTypeBackground>`
  height: 12rem;
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0 -50px 36px -28px inset;
  border-radius: 1rem 1rem 0 0;
  ${({background}) => css`
    background-image: linear-gradient(0deg, ${background[0]} 0%, ${background[1] || background[0]} 100%)`
  };
  ${CardTransitions};
`

export const CardImage = styled.img`
  position: absolute;
  ${CardTransitions};
  width: 90%;
  bottom: 0;
  z-index: 2;
  top: 12%
`
export const CardImageLoad = styled.img`
  ${CardImage};
  width: 70%;
  height: 70%;
`

export const CardId = styled.b`
  top: -1rem;
  font-size: 7rem;
  position: absolute;
  width: 100%;
  font-weight: bold;
  color: #ffffff55;
  text-align: center;
`

export const CarTypeContainer = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  gap: 0.5rem;
  display: flex;
`


export const Content = styled.a<PokeTypeColor>`
  min-width: 15rem;
  border-radius: 1rem;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
    z-index: 4;

    ${CardImage} {
      width: 100%;
    }
  }

  ${CardTransitions}
`;
