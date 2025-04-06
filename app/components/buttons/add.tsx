import { Pressable, Image, StyleSheet } from "react-native"
import { useContext } from "react"
import ThemeContext from "../../theme/themeContext"
import { router } from "expo-router"

const AddButton = () => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.addButton,
                pressed && styles.buttonPressed
            ]}
            onPress={() => router.push('/components/NewJournalEntry')}
        >
            <Image 
                source={require('../../../assets/images/plus-solid.png')} 
                style={[styles.addImage, { tintColor: theme.buttonText }]}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    addButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        marginLeft: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 1.41,
        
    },

    buttonPressed: {
        backgroundColor: '#d0d0d0',
        transform: [{ scale: 0.95 }],
    },
    addImage: {
        width: 16,
        height: 16,
    }
})

export default AddButton