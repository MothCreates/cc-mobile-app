import { fetchJournalEntries } from "@/lib/functions"
import { View, Text, SafeAreaView, Button, StyleSheet, Pressable } from "react-native"
import { supabase } from "@/lib/supabase"
import { router } from "expo-router"
import Settings from "./buttons/settings"
import { useState, useEffect, useContext } from "react"

import Calendar from "./calendar"
import { JournalEntry } from "@/lib/types"
import ThemeContext from "../theme/themeContext"
import AddButton from "./buttons/add"
import SettingsModal from "./modal/SettingsModal"

const History = () => {
    const { theme } = useContext(ThemeContext)
    const [entries, setEntries] = useState<JournalEntry[] | null>(null)
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (!error) {
            router.replace('/(auth)/Auth')
        }
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
                <Text style={[styles.backButton, { color: theme.text }]}>&lt;</Text>
                <Text style={[styles.title, { color: theme.secondaryColor }]}>History</Text>
                <Settings setModalVisible={setModalVisible} />
            </View>
            <View style={[styles.calendarContainer, { backgroundColor: theme.background }]}>
                <Calendar entries={entries} />
            </View>
           
      
        <SettingsModal modalVisible={modalVisible} setModalVisible={setModalVisible} handleSignOut={handleSignOut} />
            <View style={styles.addButtonContainer}>
                <AddButton />
            </View>
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
      
      
     
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    calendarContainer: {
        height: '80%',
        backgroundColor: '#ffffff',
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
    addButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    backButton: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    }
})

export default History