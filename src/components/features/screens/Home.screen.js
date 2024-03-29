import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";

import MenuBar from "../Menu.feature";

const HomeScreen = () => {
  return (
    <Container edges={["top"]}>
      <TopContainer />
      <MenuBar />
      <ExpoStatusbar style="auto" />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const TopContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 20%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 0 0 30% 30%;
`;

export default HomeScreen;