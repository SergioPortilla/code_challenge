import type { FC } from 'react';
import type { PaginationBarInterface } from './pagination-bar.d';
import { MenuItem, Pagination, Select } from '@mui/material';
import { PaginationContainer, PaginationPageItems } from './pagination-bar.styled';

const PaginationBar: FC<PaginationBarInterface> = ({pagination, handleChange, handleLimit, selectOptions}) => {
  const count = Math.ceil(pagination.pokeAmount!/pagination.limit);

  return (
    <PaginationContainer>
      <PaginationPageItems>
        {pagination.offset}–{pagination.offset+pagination.limit} of {pagination.pokeAmount}
      </PaginationPageItems>
      <Pagination count={count} page={pagination.page} onChange={handleChange} showFirstButton showLastButton/>
      <PaginationPageItems>Items per page:</PaginationPageItems>
      <Select variant="standard" value={`${pagination.limit}`} onChange={handleLimit}>
        {selectOptions.map((option: number) => <MenuItem value={option}>{option}</MenuItem>)}
      </Select>
    </PaginationContainer>
  );
}

export default PaginationBar;
