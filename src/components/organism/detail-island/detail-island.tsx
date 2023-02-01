import type { FC } from 'react';
import { useEffect, useState } from 'react';
import type { Type } from '@core/domain/type';
import type { Pokemon } from '@core/domain/pokemon';
import type { PokemonConfigInterface } from '@core/types/pokemon-types';
import type { Abilities } from '@core/domain/abilities';
import Tag from '@atom/tag';
import { getPokemonTypeImage, PokemonTypeConfig } from '@core/const/pokemon-type';
import { getPokemonDetails } from '@core/adapters/get-pokemon-detail';
import type { LayoutDetailInterface } from '@layouts/types/layout-detail';
import PokeImage from '@atom/poke-image/poke-image';
import PokeStats from '@molecule/poke-stats';

const DetailIsland: FC<LayoutDetailInterface> = ({id}) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const getConfig = (type: Type) => PokemonTypeConfig[type.type.name];

  useEffect(() => {
    getPokemonDetails(undefined, id || 1)
      .then(res => setPokemon(res));
  }, [])

  const getTypeInfo: (type: Type) => PokemonConfigInterface =
    (type) => !!type && PokemonTypeConfig[type.type.name];

  return <div style={{display: 'flex', flexWrap: 'wrap'}}>
    {!!pokemon &&
      <>
        <div style={{width: '50%', minWidth: '30rem'}}>
          <PokeImage
            name={pokemon.name}
            img={pokemon.sprites.other['official-artwork'].front_default}
            background={pokemon.types?.map(type => getConfig(type).background) || [PokemonTypeConfig.none.background]}
          />
          <PokeStats pokemon={pokemon} getTypeInfo={getTypeInfo}/>
        </div>
        <div style={{width: '50%', minWidth: '30rem'}}>
          <h1>Pokemon ID: {pokemon.id}</h1>

          <p>Types:</p>
          {pokemon.types.map((type: Type) =>
            <div key={type.type.name}>
              <Tag background={getTypeInfo(type).background}>
                <img src={getPokemonTypeImage(type.type.name)} alt={type.type.name}/>
                {type.type.name}
              </Tag>
            </div>)
          }
          <p>Abilities:</p>
          {pokemon.abilities.map((abilities: Abilities) =>
            <Tag background="#666666FF">
              {abilities.ability.name}
            </Tag>)}

          <p>Weight: {pokemon.weight}</p>
          <p>Height: {pokemon.height}</p>
        </div>

      </>
    }
  </div>
}

export default DetailIsland;
