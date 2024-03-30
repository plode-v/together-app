import React, { useState } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const screenWidth = Dimensions.get("window").width;
const MenuBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active button

  const handleMenuItemPress = (index) => {
    setActiveIndex(index);
    // FIXME: Navigate to the corresponding page based on index
    // FIXME: Add React Navigation for library later
  };

  return (
    <Wrapper>
      <Container>
        {/* FIXME: Add icons inside the button later */}
        <MenuItem
          onPress={() => handleMenuItemPress(0)}
          active={activeIndex === 0}
        />
        <MenuItem
          onPress={() => handleMenuItemPress(1)}
          active={activeIndex === 1}
        />
        <MenuItem
          onPress={() => handleMenuItemPress(2)}
          active={activeIndex === 2}
        />
        <MenuItem
          onPress={() => handleMenuItemPress(3)}
          active={activeIndex === 3}
        />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  position: absolute;
  bottom: 4%;
  width: 100%;
`;

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.bg.black};
  width: ${screenWidth * 0.85}px;
  align-self: center;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 20px 0;
  border-radius: 100%;
`;

const MenuItem = styled.TouchableOpacity`
  width: 55px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? props.theme.colors.bg.primary : props.theme.colors.bg.gray};
  align-items: center;
  justify-content: centers;
`;

export default MenuBar;
