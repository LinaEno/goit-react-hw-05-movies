import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonBack = styled(NavLink)`
  display: block;
  width: 100px;
  border: 1px solid #aaa5a5;
  font-size: 16px;
  text-align: center;
  padding: 10px 0;
  margin-top: 50px;
  margin-bottom: 20px;
  &:hover,
  &:focus {
    background-color: #292424;
    color: #fff;
  }
`;

export const DetailsBox = styled.div`
  display: flex;
  margin-bottom: 50px;
  & > img {
    display: block;
    margin-right: 50px;
  }
`;

export const DetailsTitle = styled.h2`
  margin-top: 0;
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const DetailsText = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const InfoLink = styled(ButtonBack)`
  display: inline-block;
  width: 80px;
  border: 1px solid #aaa5a5;
  font-size: 16px;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 30px;
  &:hover,
  &:focus {
    background-color: #292424;
    color: #fff;
  }
`;
