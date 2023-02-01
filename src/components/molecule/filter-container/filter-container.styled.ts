import styled, { css } from 'styled-components';

export const FilterContainerMain = styled.div<{ open: boolean }>`
  width: 100%;
  min-height: 1rem;
  background-color: #232323;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  transition: min-height .4s ease-in-out;
  z-index: 4;

  ${({open}) => open && css`
    min-height: 10rem;
    border-radius: 0 0 1rem 1rem;
  `}

`

export const FilterButton = styled.div<{ open: boolean }>`
  background-color: #232323;
  width: 8rem;
  height: 1.5rem;
  top: calc(100% - 1rem);
  position: absolute;
  border-radius: 0 0 4rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  ${({open}) => open && css`
    flex-direction: column-reverse;
  `}
`

export const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  width: 80%;
  gap: 1rem;
  padding: 1rem;
`
export const FilterIcon = styled.img`
  width: .9rem;
  margin: .3rem 0;
`

export const FilterText = styled.b<{ open: boolean }>`
  font-size: .7rem;
  ${({open}) => open && css`
    color: white;
  `}
`
