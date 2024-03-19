import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { mycolors } from "../../../utils/colors";
import { spacing, fontsizes } from "../../../utils/sizes";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";

export const RestuarantScreen = () => {
  const [searchQuery, setSearchQuery] = useState();
  const MainContainer = styled.SafeAreaView`
    flex: 1;
  `;
  const SearchContainer = styled.View`
    margintop: StatusBar.currentHeight;
    padding: 15px;
  `;
  const ListContainer = styled.View`
    flex: 1;
    padding: 15px;
  `;
  return (
    <>
      <MainContainer>
        <SearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode="view"
          />
        </SearchContainer>
        <ListContainer>
          <RestuarantInfoCard />
        </ListContainer>
      </MainContainer>
    </>
  );
};
