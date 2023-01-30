import type { ContactOption } from '@core/types/contact-options.type';

export interface InfoCardInterface {
  name: string;
  area: string;
  resume: string;
  contactOptions: ContactOption[]

  projectInfo: Record<string, ContactOption>;
}
