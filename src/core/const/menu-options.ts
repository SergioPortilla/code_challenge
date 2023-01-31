import type { MenuOptionsInterface, MenuOptionsType } from "../types/menu-options.type";
import { blue_poke, red_poke, yellow_poke } from '../../assets/colors';

export const MENU_OPTIONS: MenuOptionsInterface[] = [
  {slug: '/', name: 'all', backgroundColor: yellow_poke, title: "See all"},
  {slug: '/details', name: 'detail', backgroundColor: red_poke, title: "Details"},
  {slug: '/info', name: 'info', backgroundColor: blue_poke, title: "Info"},
];

export const getMenuImage = (name: MenuOptionsType) => `/assets/svg/${name}.svg`;
