import React from "react";
import styled from "styled-components";

const Seprator = styled.div`
  margin: 15px 0;
  width: 100%;
  display: flex;
  align-items: center;
  div {
    height: 1px;
    background-color: ${({ theme }) => theme.gray};
    width: 100%;
  }
  span {
    font-size: 16px;
    margin: 0 15px;
    text-transform: uppercase;
  }
`;

const Divider = () => {
  return (
    <Seprator>
      <div></div>
      <span>Or</span>
      <div></div>
    </Seprator>
  );
};

export default Divider;
