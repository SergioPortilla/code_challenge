import type { FC } from 'react';
import type { ButtonInterface } from './button.d';
import { ButtonDesign } from '@atom/button/button.styled';

const Button: FC<ButtonInterface> = ({children, buttonType = 'primary', onClick}) => {
  return <ButtonDesign buttonType={buttonType} onClick={onClick}>{children}</ButtonDesign>
}

export default Button;
