import styled from "styled-components";

export const CounterContainer = styled.div`
  display: grid;
  font-size: 2em;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 2em;
  place-items: center;
  background-color: aqua;
`;

export const CounterMessage = styled.div`
  text-align: center;
`;