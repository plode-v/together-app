import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const screenWidth = Dimensions.get("window").width;
const MenuBar = () => {


  return (
    <Container>

    </Container>
  )
}

const Container = styled.View`
  position: absolute;
  bottom: 5%;
  left: 50%;
  height: 7%;
  width: 90%;
  transform: translateX(${screenWidth / 2}px);
  background-color: ${(props) => props.theme.colors.bg.black};
`;

const Button = styled.TouchableOpacity`
  position: relative;
`;

export default MenuBar;