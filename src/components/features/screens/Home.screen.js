import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React from "react";
import { Alert } from "react-native";
import styled from "styled-components/native";

import HeaderComponent from "./Header.component";
import CreateGroup from "../CreateGroup.button";
import GroupComponent from "../Group.component";
import MenuBar from "../MenuBar.component";

const HomeScreen = () => {

  const handlePress = () => {
    Alert.alert("button pressed");
  };

  return (
    <Container>
      <HeaderComponent />
      <Wrapper alwaysBounceVertical={false}>
        <MainSection>
          <GroupComponent bgColor="orange" />
          <GroupComponent bgColor="pink" />
          <GroupComponent bgColor="skyblue" />
          <CreateGroup handleButton={handlePress} />
        </MainSection>
      </Wrapper>
      <MenuBar />
      <ExpoStatusbar style="light" />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;

const Wrapper = styled.ScrollView`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const MainSection = styled.View`
  flex: 1;
  gap: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export default HomeScreen;
