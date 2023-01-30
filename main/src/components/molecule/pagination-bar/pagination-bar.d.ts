import type { PaginationInterface } from '@core/store/config,nano';
import { ChangeEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';

export interface PaginationBarInterface {
  pagination: PaginationInterface;
  selectOptions: number[];
  handleChange: (event: ChangeEvent<unknown>, value: number) => void;
  handleLimit: (event: SelectChangeEvent) => void;
}
