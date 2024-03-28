import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import { StatusBar } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";

import IntroScreen from "./src/components/features/screens/Intro.screen";
import { theme } from "./src/components/theme/index";

const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
  background-color: ${(props) => props.theme.colors.bg.muted};
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <IntroScreen />
        </Container>
        <ExpoStatusbar style="auto" />
      </ThemeProvider>
    </>
  );
}
