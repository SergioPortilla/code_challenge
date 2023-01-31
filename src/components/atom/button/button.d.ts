import type { ReactNode } from 'react';

export interface ButtonInterface extends ButtonTypeInterface {
  children?: ReactNode | string;
  onClick?: () => void;
  href?: string;
}

export interface ButtonTypeInterface {
  buttonType?: ButtonType;
}

export type ButtonType = 'primary' | 'secondary'
