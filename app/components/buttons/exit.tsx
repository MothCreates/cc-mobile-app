import { router } from "expo-router"
import { Pressable, Text, StyleSheet } from "react-native"
import { useContext } from "react"
import ThemeContext from "../../theme/themeContext"

const ExitButton = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.exitButton,
                pressed && styles.buttonPressed
            ]}
            onPress={() => router.replace('/components/history')}
        >
            <Text style={[styles.exitText, { color: theme.buttonText }]}>×</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    exitButton: {
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
    exitText: {
        fontSize: 24,
        color: '#666',
        lineHeight: 26,
        textAlign: 'center',
    }
})

export default ExitButton