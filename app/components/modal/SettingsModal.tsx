import { StyleSheet, View, Text, Pressable } from "react-native"
import Modal from 'react-native-modal';
import { useState, useContext } from "react"
import ThemeContext from "../../theme/themeContext"

interface SettingsModalProps {
    modalVisible: boolean
    setModalVisible: (visible: boolean) => void
    handleSignOut: () => void
}

const SettingsModal = ({ modalVisible, setModalVisible, handleSignOut }: SettingsModalProps) => {

    const { theme } = useContext(ThemeContext)
    return (
        <Modal
            animationIn="slideInUp" 
            animationOut="slideOutDown"
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
        >
            <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
             
                <Pressable onPress={handleSignOut} style={styles.signOutButton}>
                    <Text style={[styles.modalText, { color: theme.buttonText }]} >Sign Out</Text>
                </Pressable>
            </View>
        </Modal>
        )
}

const styles = StyleSheet.create({
    modalContainer: {
       
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    } ,
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    signOutButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    }
})

export default SettingsModal

