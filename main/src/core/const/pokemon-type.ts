import type {
  PokemonConfigInterface,
  PokemonTypes,
} from "../types/pokemon-types";
import fire from "/assets/svg/poke-types/fire.svg";
import bug from "/assets/svg/poke-types/bug.svg";
import poison from "/assets/svg/poke-types/poison.svg";
import grass from "/assets/svg/poke-types/grass.svg";
import flying from "/assets/svg/poke-types/flying.svg";
import electric from "/assets/svg/poke-types/electric.svg";
import fighting from "/assets/svg/poke-types/fighting.svg";
import psychic from "/assets/svg/poke-types/psychic.svg";
import ghost from "/assets/svg/poke-types/ghost.svg";
import ice from "/assets/svg/poke-types/ice.svg";
import water from "/assets/svg/poke-types/water.svg";
import rock from "/assets/svg/poke-types/rock.svg";
import steel from "/assets/svg/poke-types/steel.svg";


export const PokemonTypeConfig: Record<PokemonTypes, PokemonConfigInterface> = {
  bug: { color: "#209d25", background: "#9ac09b", image: bug, name: "a" },
  dark: { color: "#555", background: "#6ee81c", image: "", name: "3" },
  dragon: { color: "#583636", background: "#583636", image: "", name: "4" },
  electric: { color: "#ac9f1c", background: "#c5d340", image: electric, name: "5" },
  fairy: { color: "#8d4c4c", background: "#de9b9b", image: "", name: "7" },
  fighting: { color: "#761313", background: "#826767", image: fighting, name: "h" },
  fire: { color: "#9d1414", background: "#ce8080", image: fire, name: "f" },
  flying: { color: "#b0ccc4", background: "#b0ccc4", image: flying, name: "s" },
  ghost: { color: "#5a5454", background: "#b0afaf", image: ghost, name: "f" },
  grass: { color: "#51951a", background: "#819b6f", image: grass, name: "f" },
  ground: { color: "#555", background: "#555", image: "", name: "g" },
  ice: { color: "#2ca4a0", background: "#7ab3a1", image: ice, name: "a" },
  normal: { color: "#555", background: "#555", image: "", name: "g" },
  poison: { color: "#983999", background: "#af7eb0", image: poison, name: "32" },
  psychic: { color: "#562fa5", background: "#9586b5", image: psychic, name: "e" },
  rock: { color: "#562e1b", background: "#826453", image: rock, name: "s" },
  steel: { color: "#2f2c2c", background: "#797979", image: steel, name: "w" },
  water: { color: "#0d9090", background: "#70a7a7", image: water, name: "33" },
};
