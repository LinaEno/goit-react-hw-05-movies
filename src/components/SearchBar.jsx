import { useSearchParams } from 'react-router-dom';
import { Form, Input, SearchButton } from './Form.styled';

export default function SearchBar({ onSubmit }) {
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
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
        />
      </Form>
    </div>
  );
}
