import type { PageLayoutProps } from '@layouts/types/layout';
import { ResultApi } from '@core/domain/result-api';

export interface LayoutFilterInterface extends PageLayoutProps {
  abilityList: ResultApi[];
  typeList: ResultApi[];
}
