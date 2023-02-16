import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  margin-top: 30px;
`;

export const CastItem = styled.li`
  border: 1px solid #000;
  width: 300px;
  height: auto;
  margin-bottom: 30px;
  scale: 1;
  &:not(:nth-child(4n)) {
    margin-right: 15px;
  }

  & > p {
    font-size: 24px;
    font-weight: 500;
    margin: 15px 0;
    text-align: center;
  }
`;
