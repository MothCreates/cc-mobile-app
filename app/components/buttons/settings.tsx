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
            style={styles.container}
            
              
            
        >
            <View style={styles.contentContainer}>
                <Image 
                    source={require('../../../assets/images/settings.png')} 
                    style={[
                        styles.icon, 
                        { 
                            tintColor: theme.text, 
                            backgroundColor: theme.background
                        }
                    ]}
                />
          
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
     justifyContent: 'center',
     alignItems: 'center',
    },
  
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 12,
        
    },
    text: {
        fontSize: 16,
        fontWeight: '500',
    },
})

export default Settings