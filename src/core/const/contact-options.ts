import type { ContactOption } from '@core/types/contact-options.type';

export const CONTACT_OPTIONS: ContactOption[] = [
  {
    socialNetwork: 'https://www.linkedin.com/in/sergio-geovany-portilla-casta%C3%B1eda-00108b148',
    image: '/assets/svg/contact/linked_in.svg',
    name: 'linked in'
  },
  {
    socialNetwork: 'mailto:email@example.com',
    image: '/assets/svg/contact/mail.svg',
    name: 'mail'
  },
  {
    socialNetwork: 'https://github.com/SergioPortilla',
    image: '/assets/svg/contact/github.svg',
    name: 'github'
  }
]

export const PROjECT_VIEW: Record<string, ContactOption> = {
  git: {socialNetwork: 'https://github.com/SergioPortilla/code_challenge', name: 'GitHub project'},
  xd: {
    socialNetwork: 'https://xd.adobe.com/view/bea92428-a066-46f0-9ce4-f958b8bf7020-ebfa/',
    name: 'See XD mockups'
  }
}
