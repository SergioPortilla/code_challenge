import type { IconStyleInterface } from './icon.d';
import styled, { css } from 'styled-components';

export const IconBackground = styled.img<IconStyleInterface>`
  ${({size, color}) => css`
    width: ${size};
    height: ${size};
    background-color: ${color || `rgba(32, 32, 32, 0.29)`};
    box-shadow: rgb(22 22 22 / 26%) 3px 3px 6px 0 inset, rgb(48 48 48 / 50%) -3px -3px 6px 1px inset;
  `}
  padding: .4rem;
  border-radius: 0.7rem;
`
