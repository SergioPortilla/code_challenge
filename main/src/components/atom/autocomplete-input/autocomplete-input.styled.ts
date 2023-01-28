import styled from 'styled-components';

export const AutocompleteContainer = styled.div`
  background-color: azure;
  
`
export const MainAutocompleteInput = styled.input`
  border: none;
  border-bottom: 2px solid #232323;
  outline: none;
  height: 2rem;
  font-size: 1rem;
  background-color: #f5f5f557;
  border-radius: .3rem .3rem 0 .3rem;
  box-shadow: rgb(147 147 147 / 6%) 0 2px 10px 0 inset;
  margin: 0.4rem;
  color: #232323;
`

export const SuggestionsModal = styled.div`
  display: flex;
  background-color: #e3e3e35c;
  min-width: 2rem;
  flex-wrap: wrap;
  gap: .2rem;
  padding: 0.3rem 1rem;
  border-radius: 0 0 .3rem .3rem;
  min-height: 2rem;
`
