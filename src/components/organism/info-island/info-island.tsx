import type { FC } from 'react';
import InfoCard from '@molecule/info-card';
import { CONTACT_OPTIONS, PROjECT_VIEW } from '@core/const/contact-options';

const InfoIsland: FC = () => {
  const name = 'Sergio Geovany Portilla Castañeda';
  const area = 'Full-stack developer';
  const resume = '4 years of experience working as a developer with different libraries and frameworks,' +
    ' directing my knowledge toward the front-end side.';
  const infoCardProps = {name, area, resume};


  return <InfoCard {...infoCardProps} contactOptions={CONTACT_OPTIONS} projectInfo={PROjECT_VIEW}/>
}

export default InfoIsland;
