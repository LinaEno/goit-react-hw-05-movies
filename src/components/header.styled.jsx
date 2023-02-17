import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #fff;
  border-bottom: 1px solid #ada4a4;
`;

export const Menu = styled(NavLink)`
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  padding-top: 30px;
  padding-bottom: 30px;
  margin-right: 50px;
  color: #000;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
