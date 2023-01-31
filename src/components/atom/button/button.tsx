import type { FC } from 'react';
import type { ButtonInterface } from './button.d';
import { ButtonDesign } from '@atom/button/button.styled';

const Button: FC<ButtonInterface> = (props) => {
  return <ButtonDesign {...props} target="_blank">{props.children}</ButtonDesign>
}

export default Button;
