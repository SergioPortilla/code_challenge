import styled from "styled-components";

export const Content = styled.div`
  min-width: 15rem;
`;

export const CardFooter = styled.div`
  background-color: #313131;
  height: 3rem;
  position: relative;
  padding: 3.5rem 1rem 1rem 1rem;
`

export const RibbonCardBack = styled.div<{color: string}>`
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 0.7rem solid ${({color}) => color};
  filter: brightness(50%);
  left: -0.7rem;
  top: 0.3rem;
  border-left: 0.7rem solid transparent;
`

export const RibbonCard = styled.div<{color: string}>`
  position: absolute;
  background-color: ${({color}) => color};
  height: 2rem; 
  min-width: 9rem;
  left: -0.7rem;
  top: 1rem; 
  z-index: 3;
  color: white;
  font-weight: bold;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`

export const CardText = styled.div`
  color: white;
  max-width: 12rem;
`

export const CardBackground = styled.div<{color: string}>`
  background-color:  ${({color}) => color};
  height: 12rem;
  position: relative;
  display: flex;
  justify-content: center;
`

export const CardImage = styled.img`
  position: absolute;
  width: 90%;
  bottom: 0;
  z-index: 2;
  top: 12%
`

export const CardId = styled.b`
  font-size: 7rem;
  position: absolute;
  width: 100%;
  font-weight: bold;
  color: #ffffff55;
  text-align: center;
`

export const CarTypeContainer = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  gap: 0.5rem;
  display: flex;
`

export const CardType = styled.img`
  width: 1.5rem;
`
