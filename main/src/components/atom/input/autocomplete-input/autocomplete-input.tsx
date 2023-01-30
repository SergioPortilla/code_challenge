import type { FC } from 'react';
import { useEffect, useState } from 'react';
import {
  AutocompleteContainer,
  MainAutocompleteInput,
  SuggestionsModal
} from '@atom/input/autocomplete-input/autocomplete-input.styled';

export const AutocompleteInput: FC<any> = ({suggestions, children}) => {
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const [_suggestionList, setSuggestionList] = useState(suggestions || []);

  useEffect(() => {
    setSuggestionList(suggestions);
  }, [])

  // onBlur={()=> setIsSuggestionsVisible(false)}
  return <AutocompleteContainer onFocus={()=> setIsSuggestionsVisible(true)}>
    <MainAutocompleteInput/>
    {isSuggestionsVisible &&
    <SuggestionsModal>
      {suggestions.map(children)}
    </SuggestionsModal>}
  </AutocompleteContainer>
}
