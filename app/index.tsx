import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";


import { router } from "expo-router";

import LoadingPage from "./components/loading-page";

import { useEffect, useState } from "react";
import NewJournalEntry from "./components/NewJournalEntry";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import Auth from "./(auth)/Auth";


export default function Index() {
  

  const [isLoading, setIsLoading] = useState(true)
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>('add prompt')
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    console.log('session', session)
  }, [])

  if (!session) {
    return <Auth />
  }


  
 console.log('index loaded')

 setTimeout(() => {
  setIsLoading(false)
 }, 2000);

 console.log('selectedPrompt', selectedPrompt)

 // we would usually fetch data here and then stop the loading page from showing we are shwoing timeout for now


  return (
    <SafeAreaView style={styles.container}>
   
    {isLoading ? <LoadingPage /> : <NewJournalEntry   />}

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