import styled from "styled-components";

const Button = styled.input`
  border: none;
  padding: 8px 0;
  color: white;
  width: 100%;
  font-weight: 800;
  background-color: ${({ theme }) => theme.blue};
  text-align: center;
  border-radius: 3px;
  &:focus-within {
    outline: none;
  }
  opacity: ${(props) => {
    return props.disabled ? 0.5 : 1;
  }};
`;

export default Button;
