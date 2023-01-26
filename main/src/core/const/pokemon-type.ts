import type {
  PokemonConfigInterface,
  PokemonTypes,
} from "../types/pokemon-types";

export const PokemonTypeConfig: Record<PokemonTypes, PokemonConfigInterface> = {
  bug: { color: "#9ac09b", background: "", image: "", name: "a" },
  dark: { color: "#555", background: "", image: "", name: "3" },
  dragon: { color: "#583636", background: "", image: "", name: "4" },
  electric: { color: "#9b9dcc", background: "", image: "", name: "5" },
  fairy: { color: "#de9b9b", background: "", image: "", name: "7" },
  fighting: { color: "#4c3f3f", background: "", image: "", name: "h" },
  fire: { color: "#ce8080", background: "", image: "", name: "f" },
  flying: { color: "#b0ccc4", background: "", image: "", name: "s" },
  ghost: { color: "#b0b0b0", background: "", image: "", name: "f" },
  grass: { color: "#819b6f", background: "", image: "", name: "f" },
  ground: { color: "#555", background: "", image: "", name: "g" },
  ice: { color: "#555", background: "", image: "", name: "a" },
  normal: { color: "#555", background: "", image: "", name: "g" },
  poison: { color: "#555", background: "", image: "", name: "32" },
  psychic: { color: "#555", background: "", image: "", name: "e" },
  rock: { color: "#555", background: "", image: "", name: "s" },
  steel: { color: "#555", background: "", image: "", name: "w" },
  water: { color: "#555", background: "", image: "", name: "33" },
};
