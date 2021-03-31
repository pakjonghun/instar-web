import styled from "styled-components";

const SErrorMessage = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 12px;
  margin: 0 0 5px 5px;
  text-align: center;
`;

const ErrorMessage = ({ value }) => {
  return value ? <SErrorMessage>{value}</SErrorMessage> : null;
};

export default ErrorMessage;
