import styled, { ThemeProvider } from "styled-components/native";

import HomeScreen from "./src/components/features/screens/Home.screen";
// import IntroScreen from "./src/components/features/screens/Intro.screen";
import { theme } from "./src/components/theme/index";


const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          {/* show intro screen if not logged in */}
          {/* <IntroScreen /> */}
          <HomeScreen />
        </Container>
      </ThemeProvider>
    </>
  );
}
