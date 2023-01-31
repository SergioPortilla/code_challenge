import type { FC } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import type { FilterAutocompleteInterface } from './filter-autocomplete.d';
import { FilterInputContainer, FilterTitle } from '@molecule/filter-autocomplete/filter-autocomplete.styled';
import type { AutocompleteRenderInputParams } from '@mui/material/Autocomplete/Autocomplete';

const FilterAutocomplete: FC<FilterAutocompleteInterface> = (props) => {
  const RenderInput = (params: AutocompleteRenderInputParams) => <TextField {...params} variant="standard"/>;
  return <FilterInputContainer>
    <div style={{width: '100%'}}>
      <FilterTitle>{props.title}</FilterTitle>
      {!!props.options && <Autocomplete {...props} renderInput={RenderInput}/>}
    </div>
    {props.children}
  </FilterInputContainer>
}

export default FilterAutocomplete;
