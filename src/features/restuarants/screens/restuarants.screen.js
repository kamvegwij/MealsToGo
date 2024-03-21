import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";

export const RestuarantScreen = () => {
  const [searchQuery, setSearchQuery] = useState();
  const MainContainer = styled.SafeAreaView`
    flex: 1;
  `;
  const SearchContainer = styled.View`
    ${StatusBar.currentHeight && "margin-top: ${StatusBar.currentHeight}px"};
    padding: ${(props) => props.theme.space[3]};
  `;
  const ListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
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
