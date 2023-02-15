import { useState } from 'react';

export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  const handleChange = e => {
    const query = e.target.value;
    setQuery(query);
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
