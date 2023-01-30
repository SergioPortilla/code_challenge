import type { FC } from 'react';
import { pokeDetail } from '@core/store/poke-detail';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { getPokemonDetails } from '@core/adapters/get-pokemon-detail';
import type { Type } from '@core/domain/type';
import { getPokemonTypeImage, PokemonTypeConfig } from '@core/const/pokemon-type';
import Tag from '@atom/tag';
import type { Stat } from '@core/domain/pokemon';

const DetailIsland: FC = () => {
  const $pokeDetail = useStore(pokeDetail);

  useEffect(() => {
    if (!$pokeDetail.types) {
      getPokemonDetails($pokeDetail.url, 1)
        .then(res => pokeDetail.set(res));
    }
  }, [])

  return <>
    {!!$pokeDetail.types && $pokeDetail.types.map((type: Type) =>
        <div key={type.type.name}>
          <Tag background={PokemonTypeConfig[type.type.name].background}>
            <img src={getPokemonTypeImage(type.type.name)} alt={type.type.name}/>
            {type.type.name}
          </Tag>
        </div>)
    }
    <div style={{backgroundColor: '#dcdcdc', padding: '1rem', display: 'inline-block'}}>
      {!!$pokeDetail.types && $pokeDetail.stats.map((stat: Stat) =>
        <div style={{display: 'flex'}}>
          <p style={{margin: 0, width: '7rem', textAlign: 'end', padding: '0 1rem'}}>{stat.stat.name}</p>
          <div style={{
            backgroundImage: `linear-gradient(90deg, ${PokemonTypeConfig[$pokeDetail.types[0].type.name].color} 0%, ${PokemonTypeConfig[$pokeDetail.types[1].type.name].color} 100%)`,
            width: `${4*100}px`, height: '1rem',
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            <div style={{backgroundColor: '#ffffff', width: `${4 * (100-stat.base_stat)}px`, height: '1rem'}}></div>
          </div>
        </div>)
      }
    </div>

  </>
}

export default DetailIsland;
