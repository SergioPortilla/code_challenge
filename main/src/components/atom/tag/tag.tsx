import type { FC } from 'react';
import { BackgroundTag, TagContent } from '@atom/tag/tag.styled';
import Icon from '@atom/icon/icon';
import close from '/public/assets/svg/close.svg'

const Tag: FC<any> = ({children, onClose = null, background = "#000" }) => {
  return <BackgroundTag color={background}>
    <TagContent>{children}</TagContent>
    { !!onClose && <Icon src={close} alt="close" size=".3rem" color={background}></Icon>}
  </BackgroundTag>
}

export default Tag;
