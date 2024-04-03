import React from "react";
import styled from "styled-components/native";

const CreateGroup = () => {
  const handleButton = () => {
    // navigate to create new group screen & slide animation from bottom
  };

  return (
    // FIXME: Fix + icon not centered
    <ButtonContainer onPress={handleButton}>
      <ButtonText>+</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity`
  height: 60px;
  width: 60px;
  background-color: red;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-size: 50px;
  text-align: center;
`;

export default CreateGroup;
