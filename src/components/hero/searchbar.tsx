import { FC } from 'react';
import { Input, SearchButton } from 'components';
import { useSearchContext } from 'context';

export const Searchbar: FC<{handleSearch: () => void}> = ({ handleSearch }) => {
    const { onChange } = useSearchContext();

    return (
      <>
          <Input placeholder="Search for movies" onChange={onChange} />
          <SearchButton onClick={handleSearch} data-testid="search-btn">Search</SearchButton>
      </>
    )
}