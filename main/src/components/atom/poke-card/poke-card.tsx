import type { CSSProperties, FC } from 'react';
import type { PokeCardInterface } from './poke-card.d';
import type { PokemonConfigInterface } from '@core/types/pokemon-types';
import { PokemonTypeConfig } from '@core/const/pokemon-type';

const styles: (styles: PokemonConfigInterface) => CSSProperties = (styles) => ({
  backgroundColor: styles.color,
  minHeight: '20rem',
  minWidth: '20px'
});

const PokeCard: FC<PokeCardInterface> = ({ type }) => {
  const extractConfig: PokemonConfigInterface = PokemonTypeConfig[type];
  return (
    <div style={{ display: 'grid' }}>
      <div style={styles(extractConfig)} {...extractConfig}>
        ss
      </div>
    </div>
  );
};

export default PokeCard;
