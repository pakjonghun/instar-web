import styled from "styled-components";
import { BaseBox } from "./share";

const Box = styled(BaseBox)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  form {
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const FormBox = ({ children, className }) => {
  return <Box className={className}>{children}</Box>;
};

export default FormBox;
