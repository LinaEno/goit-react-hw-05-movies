import MovieLink from 'components/Home/TrendingLink';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, original_title }) => {
        return <MovieLink key={id} name={original_title} id={id} />;
      })}
    </ul>
  );
};
