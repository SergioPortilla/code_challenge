import styled, { css } from 'styled-components';
import type { ButtonTypeInterface } from './button.d';

export const ButtonDesign = styled.a<ButtonTypeInterface>`
  border-radius: .5rem;
  border: none;
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  padding: .5rem;
  cursor: pointer;
  
  ${({buttonType}) => buttonType === 'secondary' ?
          css`
            background-color: #3C5AA6;
            color: #FFCB05;
          ` :
          css`
            background-color: #FFCB05;
            color: white;
          `
  };
`
