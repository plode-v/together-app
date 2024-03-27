import React from "react";
import { Text } from "react-native";
import Styled from "styled-components/native";

export const IntroScreen = () => {
  const Container = Styled.View`
    flex: 1;
    background-color: red;
  `;

  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
};

export default IntroScreen;
