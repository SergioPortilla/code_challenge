import type { FC } from 'react';
import type { InfoCardInterface } from './info-card.d';
import {
  InfoContainer,
  InfoParagraph,
  InfoParagraphPadding,
  ProjectInfoContainer,
  RedirectInfo,
  SocialNetworksContainer,
  SubtitleInfo,
  TitleInfo
} from './info-card.styled';
import Button from '@atom/button';

const InfoCard: FC<InfoCardInterface> = ({name, area, resume, contactOptions, projectInfo}) => {
  return <InfoContainer>
    <TitleInfo>{name}</TitleInfo>
    <hr/>
    <SubtitleInfo>{area}</SubtitleInfo>
    <InfoParagraph>{resume}</InfoParagraph>

    <ProjectInfoContainer>
      <Button href={projectInfo.git.socialNetwork}>{projectInfo.git.name}</Button>
      <Button href={projectInfo.xd.socialNetwork} buttonType="secondary">{projectInfo.xd.name}</Button>
    </ProjectInfoContainer>

    <InfoParagraphPadding>Get in touch with me</InfoParagraphPadding>
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
