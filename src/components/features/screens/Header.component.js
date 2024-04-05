import React from "react";
import styled from "styled-components/native";

import ProfileComponent from "../../buttons/Profile.button";

const HeaderComponent = () => {
  return (
    <Wrapper>
      <NameContainer>
        <NameText>
          {/* FIXME: Add first name */}
          John Doe
        </NameText>
        <ProfileComponent />
      </NameContainer>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 150px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: 0 0 25px 25px;
`;

const NameContainer = styled.View`
  height: max-content;
  width: 100%;
  position: absolute;
  bottom: 15%;
  /* FIXME: Update for tablet screens */
  padding: 0 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NameText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.bg.primary};
`;

export default HeaderComponent;
