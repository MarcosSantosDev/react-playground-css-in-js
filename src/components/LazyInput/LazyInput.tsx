import { useEffect, useState } from 'react';

type LazyInputProps = {
  onSearch: (query: string) => void;
  delayTime: number;
};

function LazyInput({ onSearch, delayTime }: LazyInputProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, delayTime);

    return () => clearTimeout(timeout);
  }, [query]);

  return <input type="text" onChange={event => setQuery(event.target.value)} />;
}

export default LazyInput;
