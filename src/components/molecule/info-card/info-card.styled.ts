import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: rgba(255, 255, 255, 0.72);
  width: 40rem;
  position: absolute;
  margin: 3rem;
  padding: 2rem;
  border-radius: .5rem;
  left: 0;
`
export const SocialNetworksContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const TitleInfo = styled.h1`
  font-size: 3rem;
  margin: 1rem 0;
`

export const SubtitleInfo = styled.h1`
  font-size: 2rem;
`

export const InfoParagraph = styled.p`
  font-size: 1.4rem;
`

export const InfoParagraphPadding = styled.p`
  padding-top: 5rem;
  ${InfoParagraph};
`

export const RedirectInfo = styled.a`
  margin: 1rem 1rem 1rem 0;
`

export const ProjectInfoContainer = styled.div`
  display: flex;
  gap: 1rem;
`
