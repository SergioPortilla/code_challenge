import type { FC } from 'react';
import Button from '@atom/button';
import { NotFoundContainer, NotFoundImage, NotFoundText } from '@molecule/not-found/not-found.styled';

const NotFount: FC = () => {
  return <NotFoundContainer>
    <NotFoundImage src="/assets/404_snorlax.png" alt="not found"/>
    <NotFoundText>Whoops! Page not found</NotFoundText>
    <Button href={"/"}>Go back again</Button>
  </NotFoundContainer>
}

export default NotFount;
