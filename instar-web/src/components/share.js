import { Link } from "react-router-dom";
import styled from "styled-components";

export const BaseBox = styled.div`
  border: 1 solid ${({ theme }) => theme.lightGray};
  background-color: white;
  width: 100%;
`;

export const FatLink = styled(Link)`
  font-weight: 600;
  font-size: inherit;
`;
