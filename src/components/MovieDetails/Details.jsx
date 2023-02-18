import { DetailsBox, DetailsText, DetailsTitle } from './MovieDetails.styled';

export const Details = ({ movieDetails }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movieDetails;
  return (
    <>
      <DetailsBox>
        <img src={poster_path} alt={original_title} />
        <div>
          <DetailsTitle>
            {original_title}({release_date})
          </DetailsTitle>
          <DetailsText>User score: {vote_average}</DetailsText>
          <DetailsText>Overview</DetailsText>
          <p>{overview}</p>
          <DetailsText>Genres</DetailsText>
          <p>{genres}</p>
        </div>
      </DetailsBox>
    </>
  );
};
