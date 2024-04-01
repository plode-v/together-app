import React from "react";
import styled from "styled-components/native";

const GroupComponent = ({ bgColor }) => {
  const Container = styled.View`
    height: 200px;
    width: 100%;
    background-color: ${bgColor};
    border-radius: 10px;
  `;

  return <Container />;
};

export default GroupComponent;
