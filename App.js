import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { mycolors } from "./src/utils/colors";
import { spacing, fontsizes } from "./src/utils/sizes";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text>search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchContainer: {
    marginTop: StatusBar.currentHeight,
    padding: spacing.lg,
    backgroundColor: mycolors.green,
  },
  listContainer: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: mycolors.lightblue,
  },
});
