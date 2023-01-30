export type MenuOptionsType =
  'all'
  | 'detail'
  | 'info'
  | 'settings'

export interface MenuOptionsInterface {
  slug?: string;
  backgroundColor: string;
  name: MenuOptionsType;
  title: string;
}
