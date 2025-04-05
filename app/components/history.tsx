import { fetchJournalEntries, deleteJournalEntries } from "@/lib/functions"
import { View, Text, SafeAreaView, Button, StyleSheet, Pressable } from "react-native"
import { supabase } from "@/lib/supabase"
import { router } from "expo-router"

import { useState, useEffect, useContext } from "react"

import Calendar from "./calendar"
import { JournalEntry } from "@/lib/types"
import ThemeContext from "../theme/themeContext"

const History = () => {
    const { theme } = useContext(ThemeContext)
    const [entries, setEntries] = useState<JournalEntry[] | null>(null)

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            router.replace('/(auth)/Auth')
        }
    }

    const deleteEntries = async () => {
        const entries = await deleteJournalEntries()
        setEntries(entries)
    }

    const fetchEntries = async () => {
        const entries = await fetchJournalEntries()
        setEntries(entries)
    }

    useEffect(() => {
        fetchEntries()
    }, [])

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.titleContainer, { backgroundColor: theme.background }]}>
                <Text style={[styles.title, { color: theme.secondaryColor }]}>History</Text>
            </View>
            <Calendar entries={entries} />
           
            <Pressable style={[styles.signOutButton, { backgroundColor: theme.secondaryColor }]}  onPress={handleSignOut} >
                <Text style={[styles.signOutText, { color: theme.background }]}>Sign Out</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    titleContainer: {
        padding: 16,
        backgroundColor: '#4a90e2',
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },
    deleteButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 8,
        overflow: 'hidden',
    },
    signOutButton: {
        position: 'absolute',
        top: 80,
        right: 20,
        
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: 'hidden',
    },
    signOutText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },
})

export default History