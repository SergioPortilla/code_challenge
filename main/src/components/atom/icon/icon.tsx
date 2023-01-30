import type { FC } from 'react';
import type { IconInterface } from './icon.d';
import { IconBackground } from './icon.styled';

const Icon: FC<IconInterface> = (props) => {
  return <IconBackground {...props}/>
}

export default Icon;
