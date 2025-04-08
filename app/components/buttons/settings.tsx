import { View, Text, Pressable, StyleSheet, Image } from "react-native"
import { router } from "expo-router"
import ThemeContext from "../../theme/themeContext"
import { useContext } from "react"

interface SettingsProps {
    setModalVisible: (visible: boolean) => void
}

const Settings = ({ setModalVisible }: SettingsProps) => {
    const { theme } = useContext(ThemeContext)
    
    return (
        <Pressable 
            onPress={() => setModalVisible(true)}
            style={({pressed}) => [
            
                { 
                    backgroundColor: pressed ? theme.color : theme.background,
                    borderColor: theme.color,
                }
            ]}
        >
            <View style={styles.contentContainer}>
                <Image 
                    source={require('../../../assets/images/settings.png')} 
                    style={[
                        styles.icon, 
                        { 
                            tintColor: theme.name === 'dark' ? theme.text : theme.background,
                            backgroundColor: theme.background
                        }
                    ]}
                />
          
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 12,
        filter: 'invert(1)', 
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
    },
})

export default Settings