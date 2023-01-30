import type { MenuOptionsType } from '@core/types/menu-options.type';
import type { ReactNode } from 'react';

export interface PageLayoutProps {
  page?: MenuOptionsType;

  children?: ReactNode;
}
