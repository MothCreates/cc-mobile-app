import { View, Text, TextInput, SafeAreaView, StyleSheet, Pressable } from "react-native"
import { useEffect, useState } from "react"
import { updateJournalEntry } from "../../lib/functions"
import { router, useLocalSearchParams } from "expo-router"
import ThemeContext from "../theme/themeContext"
import { useContext } from "react"
import DoneButton from "./buttons/done"
import ExitButton from "./buttons/exit"



const Update: React.FC = () => {
    const { previousJournalEntry, id } = useLocalSearchParams()
    const { theme } = useContext(ThemeContext)
    
    console.log("previousJournalEntry", previousJournalEntry)
    console.log("id", id)
    const [updatedEntry, setUpdatedEntry] = useState<string>(previousJournalEntry as string)
  


    const handleUpdatePress = () => {
        console.log("updatedEntry done", updatedEntry)
        if (updatedEntry) {
            updateJournalEntry(updatedEntry, id as string).then(() => {
                
                router.push('/components/history')
            })
        }
    }

    useEffect(() => {
        console.log("updatedEntry", updatedEntry)
    }, [updatedEntry])


    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={[styles.ventContainer, { backgroundColor: theme.background }]}>
            <ExitButton />
                <Text style={[styles.prompt, { color: theme.color }]}>Vent</Text>
                <DoneButton onSubmit={handleUpdatePress} newPrompt={updatedEntry} />
            </View>
            <View style={[styles.inputContainer, { backgroundColor: theme.background }]}>
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    multiline={true}
                    onChangeText={setUpdatedEntry}
                    value={updatedEntry}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    prompt: {
        fontSize: 20,
        marginBottom: 10,
    },
    ventContainer: {
        height: 100,
        width: 400,
 
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        padding: 10,
        width: 400,
        height: 700,
    },
    inputContainer: {
        height: '80%',
        width: '100%',
    },
    submitButton: {
        height: 40,
        width: 80,
        backgroundColor: "#BEBEBE",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        alignSelf: 'flex-end',
    },
    submitButtonText: {
        color: "white",
        fontSize: 16,
    }
})

export default Update