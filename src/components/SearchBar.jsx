// import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar({ onSubmit }) {
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleChange = e => {
    const query = e.target.value;
    setSearchParams({ query });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
