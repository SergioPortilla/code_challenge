import type { FC } from 'react';
import type { InfoCardInterface } from './info-card.d';
import { InfoContainer, InfoParagraph, RedirectInfo, SocialNetworksContainer } from './info-card.styled';
import Button from '@atom/button';

const InfoCard: FC<InfoCardInterface> = ({name, area, resume, contactOptions, projectInfo}) => {
  return <InfoContainer>
    <h1>{name}</h1>
    <hr/>
    <b>{area}</b>
    <p>{resume}</p>

    <RedirectInfo href={projectInfo.git.socialNetwork} target="_blank">
      <Button>{projectInfo.git.name}</Button>
    </RedirectInfo>
    <RedirectInfo href={projectInfo.xd.socialNetwork} target="_blank">
      <Button buttonType="secondary">{projectInfo.xd.name}</Button>
    </RedirectInfo>

    <InfoParagraph>Get in touch with me</InfoParagraph>
    <SocialNetworksContainer>
      {contactOptions.map(option =>
        <RedirectInfo key={option.name} href={option.socialNetwork} target="_blank">
          <img src={option.image} alt={option.name}/>
        </RedirectInfo>)
      }
    </SocialNetworksContainer>
  </InfoContainer>
}

export default InfoCard;
