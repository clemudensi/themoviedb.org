import { Input } from 'components';
import { useCounterContext } from 'context';

export const Searchbar = () => {
    const { onChange } = useCounterContext();

    return (
      <>
          <Input placeholder="Type to search for a movie" onChange={onChange} />
      </>
    )
}