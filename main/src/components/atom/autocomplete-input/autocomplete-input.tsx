import type { FC } from 'react';
import {
  AutocompleteContainer,
  MainAutocompleteInput,
  SuggestionsModal
} from '@atom/autocomplete-input/autocomplete-input.styled';
import { useEffect, useState } from 'react';

export const AutocompleteInput: FC = ({suggestions, children}) => {
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const [suggestionList, setSuggestionList] = useState(suggestions || []);

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
