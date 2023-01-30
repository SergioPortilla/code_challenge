import type { FC } from 'react';
import type { SelectInputInterface } from './select-input';

const SelectInput: FC<SelectInputInterface> = ({onSelect}) => {
  return <select onChange={onSelect}>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="50">50</option>
    <option value="200">200</option>
  </select>
}

export default SelectInput;
