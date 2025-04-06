import { Pressable, Image, StyleSheet } from "react-native"
import { useContext } from "react"
import ThemeContext from "../../theme/themeContext"
import { router } from "expo-router"

const DeleteButton = ({onDelete}: {onDelete: () => void}) => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.deleteButton,
                pressed && styles.buttonPressed
            ]}
            onPress={onDelete}
        >
            <Image 
                source={require('../../../assets/images/trash-can-solid.png')} 
                style={[styles.deleteImage, { tintColor: theme.buttonText }]}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    deleteButton: {
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
        shadowOpacity: 0.22,
        shadowRadius: 1.41,
    },
    buttonPressed: {
        backgroundColor: '#d0d0d0',
        transform: [{ scale: 0.95 }],
    },
    deleteImage: {
        width: 16,
        height: 16,
    }
})

export default DeleteButton