import type { PokemonConfigInterface, PokemonTypes } from "../types/pokemon-types";
import { loading_color } from '../../../public/assets/colors/colors';


export const PokemonTypeConfig: Record<PokemonTypes, PokemonConfigInterface> = {
  bug:      { color: "#209d25", background: "#9ac09b" },
  dark:     { color: "#373737", background: "#797979" },
  dragon:   { color: "#ac601e", background: "#a7775d" },
  electric: { color: "#ac9f1c", background: "#c5d340" },
  fairy:    { color: "#c06f6f", background: "#de9b9b" },
  fighting: { color: "#761313", background: "#826767" },
  fire:     { color: "#9d1414", background: "#ce8080" },
  flying:   { color: "#b0ccc4", background: "#b0ccc4" },
  ghost:    { color: "#5a5454", background: "#b0afaf" },
  grass:    { color: "#51951a", background: "#819b6f" },
  ground:   { color: "#513b29", background: "#a08b7b" },
  ice:      { color: "#2ca4a0", background: "#7ab3a1" },
  normal:   { color: "#949034", background: "#89875e" },
  poison:   { color: "#983999", background: "#af7eb0" },
  psychic:  { color: "#562fa5", background: "#9586b5" },
  rock:     { color: "#562e1b", background: "#826453" },
  steel:    { color: "#2f2c2c", background: "#797979" },
  water:    { color: "#0d9090", background: "#70a7a7" },
  none:     { color: loading_color, background: loading_color }
};

export const getPokemonTypeImage = (type: PokemonTypes) => `/assets/svg/poke-types/${type}.svg`
