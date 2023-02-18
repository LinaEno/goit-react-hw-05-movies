import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const Input = styled(DebounceInput)`
  width: 200px;
  margin-right: 10px;
  font-size: 20px;
  padding: 10px;
`;

export const Form = styled.form`
  margin-bottom: 40px;
  margin-top: 40px;
`;
