import React from "react";
import styled from "styled-components/native";

const PageContainer = ({ children, screenWidth }) => {
  return <Container width={screenWidth}>{children}</Container>;
};

const Container = styled.View`
  width: ${(props) => props.width}px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.muted};
`;

export default PageContainer;
