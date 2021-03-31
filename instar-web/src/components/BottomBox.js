import styled from "styled-components";
import { BaseBox } from "./share";

const Box = styled(BaseBox)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 25px;
  a {
    margin-left: 5px;
    font-weight: 500;
    color: ${({ theme }) => theme.blue};
  }
  font-size: 14px;
  span {
    margin-right: 5px;
  }
`;

const BottomBox = ({ children }) => {
  return <Box>{children}</Box>;
};

export default BottomBox;
