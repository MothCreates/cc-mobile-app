import { View, Text, TextInput, SafeAreaView, StyleSheet, Pressable } from "react-native"
import { useState } from "react"
import { updateJournalEntry } from "../../lib/functions"
import { router } from "expo-router"

interface UpdateProps {
    previousJournalEntry: string
}

const Update: React.FC<UpdateProps> = ({ previousJournalEntry }) => {
    const [updatedEntry, setUpdatedEntry] = useState<string>(previousJournalEntry)



    const handleUpdatePress = () => {
        if (updatedEntry) {
            updateJournalEntry(updatedEntry).then(() => {
                router.push('/components/history')
            })
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.ventContainer}>
                <Pressable style={styles.submitButton} onPress={handleUpdatePress}>
                    <Text style={styles.submitButtonText}>Update</Text>
                </Pressable>
                <Text style={styles.prompt}>Edit Entry</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    multiline={true}
                    onChangeText={setUpdatedEntry}
                    value={"previous entry"}
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
        justifyContent: 'center',
        alignItems: 'center',
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