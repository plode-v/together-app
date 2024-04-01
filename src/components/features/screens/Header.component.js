import React from "react";
import styled from "styled-components/native";

const HeaderComponent = () => {
  return (
    <Wrapper>
      <NameContainer>
        <NameText>
          {/* FIXME: Add first name */}
          John Doe
        </NameText>
      </NameContainer>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 150px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 0 0 25% 25%;
`;

const NameContainer = styled.View`
  height: max-content;
  width: 50%;
  position: absolute;
  bottom: 15%;
  margin-left: 5%;
`;

const NameText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.bg.primary};
`;

export default HeaderComponent;
