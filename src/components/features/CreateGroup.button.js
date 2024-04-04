import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import styled from "styled-components/native";

const CreateGroup = ({ handleButton }) => {
  return (
    // FIXME: Fix + icon not centered
    <ButtonContainer onPress={handleButton} underlayColor="transparent">
      <AntDesign
        name="pluscircle"
        size={70}
        color="#3E3EF4"
        backgroundColor="transparent"
      />
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableHighlight`
  height: 70px;
  width: 90px;
  padding: 0 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export default CreateGroup;
