import React from "react";
import { StatusBar as ExpoStatusBar } from "react-native";
import { RestuarantScreen } from "./src/features/restuarants/screens/restuarants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarantScreen />
      </ThemeProvider>
      <ExpoStatusBar status="auto" />
    </>
  );
}
