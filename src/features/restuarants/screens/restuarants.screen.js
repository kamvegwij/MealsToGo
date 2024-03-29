import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { mycolors } from "../../../utils/colors";
import { spacing, fontsizes } from "../../../utils/sizes";
import { Searchbar } from "react-native-paper";
import { RestuarantInfoCard } from "../components/restuarant-info-card.component";

export const RestuarantScreen = () => {
  const [searchQuery, setSearchQuery] = useState();
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
            mode="view"
          />
        </View>
        <View style={styles.listContainer}>
          <RestuarantInfoCard />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    marginTop: StatusBar.currentHeight,
    padding: spacing.lg,
  },
  listContainer: {
    flex: 1,
    padding: spacing.lg,
  },
});
