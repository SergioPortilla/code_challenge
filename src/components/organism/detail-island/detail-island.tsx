import type { FC } from 'react';
import { useEffect, useState } from 'react';
import type { Type } from '@core/domain/type';
import type { Pokemon, Stat } from '@core/domain/pokemon';
import type { PokemonConfigInterface } from '@core/types/pokemon-types';
import type { Abilities } from '@core/domain/abilities';
import Tag from '@atom/tag';
import { getPokemonTypeImage, PokemonTypeConfig } from '@core/const/pokemon-type';
import { getPokemonDetails } from '@core/adapters/get-pokemon-detail';

const DetailIsland: FC<any> = ({id}) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    getPokemonDetails(undefined, id)
      .then(res => setPokemon(res));
  }, [])

  const getTypeInfo: (type: Type) => PokemonConfigInterface =
    (type) => !!type && PokemonTypeConfig[type.type.name];

  return <div style={{display: 'flex'}}>
    {!!pokemon &&
      <>
        <div style={{width: '50%'}}>
          <div>
            <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
          </div>
          {pokemon.name}

          <div style={{backgroundColor: '#dcdcdc', padding: '1rem', display: 'inline-block'}}>
            {!!pokemon.types && pokemon.stats.map((stat: Stat) =>
              <div style={{display: 'flex'}}>
                <p style={{margin: 0, width: '7rem', textAlign: 'end', padding: '0 1rem'}}>{stat.stat.name}</p>
                <div style={{
                  backgroundImage: `linear-gradient(90deg, 
                  ${getTypeInfo(pokemon.types[0]).color} 0%, 
                  ${getTypeInfo(pokemon.types[1] || pokemon.types[0]).color} 100%)`,
                  width: `${4 * 100}px`, height: '1rem',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  borderRadius: '.2rem'
                }}>
                  <div style={{
                    backgroundColor: '#ffffff',
                    width: `${4 * (100 - stat.base_stat)}px`,
                    height: '1rem',
                    borderRadius: '0 .2rem .2rem 0'
                  }}></div>
                </div>
              </div>)
            }
          </div>
        </div>
        <div style={{width: '50%'}}>
          <h1>{pokemon.id}</h1>
          <b>{pokemon.name}</b>

          {pokemon.types.map((type: Type) =>
            <div key={type.type.name}>
              <Tag background={getTypeInfo(type).background}>
                <img src={getPokemonTypeImage(type.type.name)} alt={type.type.name}/>
                {type.type.name}
              </Tag>
            </div>)
          }
          {pokemon.abilities.map((abilities: Abilities) =>
            <Tag background="#666666FF">
              {abilities.ability.name}
            </Tag>)}

          {pokemon.weight}
          {pokemon.height}
          {pokemon.moves.map(e => e.move.name).join(", ")}
        </div>


      </>
    }
  </div>
}

export default DetailIsland;
