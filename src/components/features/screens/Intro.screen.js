import React, { useState } from "react";
import { Dimensions, ScrollView, Text, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import PageContainer from "../../PageContainer";

const IntroScreen = () => {
  const [currentPage, setCurerntPage] = useState(0);
  const screenWidth = Dimensions.get("window").width;

  const handleScroll = (evt) => {
    const { contentOffset, layoutMeasurement } = evt.nativeEvent;
    const page = Math.floor(contentOffset.x / layoutMeasurement.width);
    setCurerntPage(page);
  };

  return (
    <Container>
      <ScrollView
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
      >
        {/* Page 1 */}
        <PageContainer screenWidth={screenWidth}>
          <PageText>Welcome to Together App</PageText>
          <Text>Swipe</Text>
        </PageContainer>
        {/* Page 2 */}
        <PageContainer screenWidth={screenWidth}>
          <PageText>Page 2 Content</PageText>
        </PageContainer>
        {/* Page 3 */}
        <PageContainer screenWidth={screenWidth}>
          <PageText>Page 3 Content</PageText>
          <GetStartedButton>
            <PageText>Hello</PageText>
          </GetStartedButton>
        </PageContainer>
      </ScrollView>
      {/* Navigation Dots */}
      <DotContainer>
        {[0, 1, 2].map((index) => (
          <Dot key={index} active={index === currentPage} />
        ))}
      </DotContainer>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.muted};
`;

const PageText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.bg.secondary};
`;

const GetStartedButton = styled.TouchableOpacity`
  background-color: green;
`;

const DotContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: row;
  gap: 5px;
`;

const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "blue" : "gray")};
`;

export default IntroScreen;
