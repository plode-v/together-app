import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import GroupComponent from "../Group.component";
import MenuBar from "../MenuBar.component";

const HomeScreen = () => {
  return (
    <Container>
      <TopContainer />
      <ScrollView>
        <MainSection>
          <GroupComponent bgColor="orange" />
          <GroupComponent bgColor="pink" />
          <GroupComponent bgColor="blue" />
        </MainSection>
      </ScrollView>
      <MenuBar />
      <ExpoStatusbar style="light" />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  overflow: scroll;
`;

const TopContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 150px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 0 0 30% 30%;
  z-index: 1;
`;

const MainSection = styled.View`
  flex: 1;
  margin-top: 150px;
  gap: 15px;
  padding: 0 15px;
`;

export default HomeScreen;
