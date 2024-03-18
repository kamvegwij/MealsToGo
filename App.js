import React from "react";
import { StatusBar as ExpoStatusBar } from "react-native";
import { RestuarantScreen } from "./src/features/restuarants/screens/restuarants.screen";

export default function App() {
  return (
    <>
      <RestuarantScreen />
      <ExpoStatusBar status="auto" />
    </>
  );
}
