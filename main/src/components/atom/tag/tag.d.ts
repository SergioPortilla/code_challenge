import { ReactNode } from 'react';

export interface TagInterface {
  children?: ReactNode;
  onClose: () => void;
  background: string;
}
