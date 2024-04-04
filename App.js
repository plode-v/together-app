import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import styled, { ThemeProvider } from "styled-components/native";

import HomeScreen from "./src/components/features/screens/Home.screen";
// import IntroScreen from "./src/components/features/screens/Intro.screen";
import { theme } from "./src/components/theme/index";

const Container = styled.View`
  flex: 1;
`;

export default function App() {

  const [oswaldLoad] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoad || !latoLoaded) {
    return null;
  }

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
