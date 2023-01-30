import styled, { css } from 'styled-components';
import type { ButtonTypeInterface } from './button.d';

export const ButtonDesign = styled.button<ButtonTypeInterface>`
  border-radius: .5rem;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  padding: .5rem;
  cursor: pointer;
  ${({buttonType}) => buttonType === 'primary' ?
          css`
            background-color: #FFCB05;
            color: white;` :
          css`
            background-color: #3C5AA6;
            color: #FFCB05;
          `
  };
`
