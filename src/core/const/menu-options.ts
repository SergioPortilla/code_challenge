import type { MenuOptionsInterface, MenuOptionsType } from "../types/menu-options.type";
import { blue_poke, green_poke, red_poke, yellow_poke } from '../../../public/assets/colors/colors';

export const MENU_OPTIONS: MenuOptionsInterface[] = [
  { slug: undefined, name: 'all', backgroundColor: yellow_poke, title: "See all" },
  { slug: 'details', name: 'detail', backgroundColor: red_poke, title: "Details" },
  { slug: 'info', name: 'info', backgroundColor: blue_poke, title: "Info" },
  { slug: 'settings', name: 'settings', backgroundColor: green_poke, title: "Settings" },
];

export const getMenuImage = (name: MenuOptionsType) => `/assets/svg/${name}.svg`;
