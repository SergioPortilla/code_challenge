import { useState } from "react";
import {
  CounterContainer,
  CounterMessage,
} from "@components/counter/Counter.styled";

export default function Counter({
  children,
  count: initialCount,
}: {
  children: JSX.Element;
  count: number;
}) {
  const [count, setCount] = useState(initialCount);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <CounterContainer>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </CounterContainer>

      <CounterMessage>{children}</CounterMessage>
    </>
  );
}
