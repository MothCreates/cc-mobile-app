import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { router } from "expo-router";

import LoadingPage from "./components/loading-page";

import { useState } from "react";
import Prompts from "./components/prompts";


export default function Index() {
 
  const [isLoading, setIsLoading] = useState(true)
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null)

 console.log('index loaded')

 setTimeout(() => {
  setIsLoading(false)
 }, 2000);

 console.log('selectedPrompt', selectedPrompt)

 // we would usually fetch data here and then stop the loading page from showing we are shwoing timeout for now


  return (
    <SafeAreaView style={styles.container}>
   
    {isLoading ? <LoadingPage /> : <Prompts setSelectedPrompt={setSelectedPrompt} />}

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