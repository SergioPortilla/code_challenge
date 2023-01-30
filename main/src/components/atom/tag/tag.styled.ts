import styled, { css } from 'styled-components';

export const BackgroundTag = styled.div<{color: string}>`
  min-width: 4rem;
  width: fit-content;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 5rem;
  height: 1rem;
  padding: .2rem;
  ${({color}) => css`
    background-color: ${color};
  `}
`;
export const TagContent = styled.div`
  font-size: .8rem;
  padding: 0 0.3rem;
  color: #e3e3e3;
  display: flex;
  gap: 0.4rem;
  align-items: center;
`
