import type { Stat } from '@core/domain/pokemon';
import type { FC } from 'react';

const PokeStats: FC<any> = ({pokemon, getTypeInfo}) => {

  return <div style={{backgroundColor: '#dcdcdc', padding: '1rem', display: 'inline-block'}}>
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
}

export default PokeStats;
