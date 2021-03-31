import styled from "styled-components";

const Input = styled.input`
  border: solid 1px ${({ theme, errors }) => (errors ? "red" : theme.gray)};
  width: 100%;
  background-color: #e8f0fe;
  padding: 10px;

  &:focus-within {
    border: solid 1px ${({ theme }) => theme.deepGray};
    outline: none;
  }

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export default Input;
