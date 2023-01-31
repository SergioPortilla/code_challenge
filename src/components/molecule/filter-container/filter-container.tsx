import type { FC } from 'react';
import { useState } from 'react';
import {
  FilterButton,
  FilterContainerMain,
  FilterIcon,
  FilterOptions,
  FilterText
} from '@molecule/filter-container/filter-container.styled';

const FilterContainer: FC<any> = ({children}) => {
  const [isOpen, setOpened] = useState(false);
  const filterAssets = {
    0: {title: 'Apply filter', img: '/assets/svg/filter.svg'},
    1: {title: 'Close', img: '/assets/svg/close.svg'}
  }

  return <FilterContainerMain open={isOpen}>
    <FilterButton onClick={() => setOpened(!isOpen)} open={isOpen}>
      <FilterIcon src={filterAssets[isOpen ? 1 : 0].img} alt="filter"/>
      <FilterText open={isOpen}>{filterAssets[isOpen ? 1 : 0].title}</FilterText>
    </FilterButton>
    {isOpen && <FilterOptions>{children}</FilterOptions>}
  </FilterContainerMain>
}

export default FilterContainer;
