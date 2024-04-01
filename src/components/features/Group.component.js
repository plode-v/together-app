import React from "react";
import styled from "styled-components/native";

const GroupComponent = ({ bgColor }) => {
  const Container = styled.View`
    width: 100%;
    background-color: ${bgColor};
    border-radius: 10px;
    height: 200px;
    /* FIXME: configure this on tablet as well */
  `;

  return <Container />;
};

export default GroupComponent;
