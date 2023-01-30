import type { FC } from 'react';

const NotFountIsland: FC = () => {
  return <div style={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
    <img style={{width: '35rem'}} src="/assets/404_snorlax.png" alt="not found"/>
    <h1 style={{color: 'gray', fontSize: '3rem', textAlign: 'center', marginTop: '-2rem'}}>Whoops! Page not found</h1>
    <button>Go back again</button>
  </div>
}

export default NotFountIsland;
