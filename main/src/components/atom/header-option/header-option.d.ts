import type { MenuOptionsType } from '@core/types/menu-options.type';

export interface HeaderOptionInterface {
  backgroundColor: string;
  name: MenuOptionsType;
  title: string;
  slug?: string;
  page?: MenuOptionsType;
}
