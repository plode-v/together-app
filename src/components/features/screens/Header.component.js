import React from "react";
import styled from "styled-components/native";

const HeaderComponent = () => {
  return (
    <Wrapper>
      <Container />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: transparent;
`;

const Container = styled.View`
  height: 150px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 0 0 25% 25%;
`;

export default HeaderComponent;
