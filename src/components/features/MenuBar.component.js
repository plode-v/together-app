import React, { useState } from "react";
import styled from "styled-components/native";

const MenuBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active button

  const handleMenuItemPress = (index) => {
    setActiveIndex(index);
    // FIXME: Navigate to the corresponding page based on index
    // FIXME: Add React Navigation for library later
  };

  return (
    <Wrapper>
      {/* FIXME: Add icons inside the button later */}
      <MenuItem
        onPress={() => handleMenuItemPress(0)}
        active={activeIndex === 0}
      />
      <MenuItem
        onPress={() => handleMenuItemPress(1)}
        active={activeIndex === 1}
      />
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 80px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.black};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MenuItem = styled.TouchableOpacity`
  width: 50%;
  height: 100%;
  background-color: ${(props) =>
    props.active ? props.theme.colors.ui.primary : props.theme.colors.bg.gray};
`;

export default MenuBar;
