import { FC } from 'react';
import { Input, SearchButton } from 'components';
import { useCounterContext } from 'context';
import { SearchbarProps } from 'types';

export const Searchbar: FC<SearchbarProps> = ({ handleSearch }) => {
    const { onChange } = useCounterContext();

    return (
      <>
          <Input placeholder="Type to search for a movie" onChange={onChange} />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
      </>
    )
}