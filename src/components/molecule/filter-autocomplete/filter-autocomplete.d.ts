import type { ReactNode } from 'react';
import * as React from 'react';
import type { AutocompleteChangeDetails, AutocompleteChangeReason, AutocompleteValue } from '@mui/material';

export interface FilterAutocompleteInterface<T = unknown> {
  title: string;
  multiple?: boolean;
  freeSolo?: boolean
  getOptionLabel: (option: any) => string;
  onChange: (
    event: React.SyntheticEvent,
    value: AutocompleteValue<T, any, any, any>,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<T>,
  ) => void;
  onInput?: (event: any) => void;
  options: T[];
  children?: ReactNode;
}
