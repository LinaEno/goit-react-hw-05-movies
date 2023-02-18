import { useSearchParams } from 'react-router-dom';
import { Form, Input } from './Form.styled';

// export default function SearchBar() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query');

//   const handleSubmit = e => {
//     e.preventDefault();
//     const query = e.target.query.value.trim().toLowerCase();
//     if (!query) return;
//     setSearchParams({ query });
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Input
//           type="text"
//           name="query"
//           autoComplete="off"
//           autoFocus
//           value={query}
//         />
//         <button type="submit">Search</button>
//       </Form>
//     </div>
//   );
// }

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = e => {
    e.preventDefault();
    // const query = e.target.query.value.trim().toLowerCase();
    // if (!query) return;
    // setSearchParams({ query });
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   onSubmit(query);
  // };

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
          name="query"
          autoComplete="off"
          autoFocus
          value={query}
        />
      </Form>
    </div>
  );
}
