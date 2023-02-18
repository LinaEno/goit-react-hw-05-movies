import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  color: #000;
  text-decoration: underline;
  font-weight: 700;
  font-size: 48px;
`;

export const MovieItem = styled(NavLink)`
  font-size: 20px;
  margin-bottom: 20px;
  display: block;
  font-style: italic;
`;
