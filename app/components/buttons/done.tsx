import { Pressable, Text, StyleSheet } from "react-native"
import { useContext } from "react"
import ThemeContext from "../../theme/themeContext"

const DoneButton = ({onSubmit, newPrompt}: {onSubmit: (prompt: string | null) => void, newPrompt: string | null}) => {
    const { theme } = useContext(ThemeContext)
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.doneButton,
                pressed && styles.buttonPressed
            ]}
            onPress={() => onSubmit(newPrompt)}
        >
            <Text style={[styles.doneText, { color: theme.buttonText }]}>✓</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    doneButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    buttonPressed: {
        backgroundColor: '#d0d0d0',
        transform: [{ scale: 0.95 }],
    },
    doneText: {
        fontSize: 20,
        color: '#666',
        lineHeight: 22,
        textAlign: 'center',
    }
})

export default DoneButton
