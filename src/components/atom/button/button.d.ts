export interface ButtonInterface extends ButtonTypeInterface {
  children?: string;
  onClick?: () => void;
}

export interface ButtonTypeInterface {
  buttonType?: ButtonType;
}

export type ButtonType = 'primary' | 'secondary'
