import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";
import Title from "./components/title";

export default function Index() {

 console.log('index loaded')

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <Title />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});