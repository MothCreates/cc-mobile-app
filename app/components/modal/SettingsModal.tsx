import { StyleSheet, View, Text } from "react-native"
import Modal from 'react-native-modal';
import { useState, useContext } from "react"
import ThemeContext from "../../theme/themeContext"

interface SettingsModalProps {
    modalVisible: boolean
    setModalVisible: (visible: boolean) => void
}

const SettingsModal = ({ modalVisible, setModalVisible }: SettingsModalProps) => {

    const { theme } = useContext(ThemeContext)
    return (
        <Modal
            animationIn="slideInUp" 
            animationOut="slideOutDown"
            isVisible={modalVisible}
            onBackdropPress={() => setModalVisible(false)}
        >
            <View style={[styles.modalContainer, { backgroundColor: theme.background }]}>
                <Text style={[styles.modalText, { color: theme.text }]} >Settings</Text>
            </View>
        </Modal>
        )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    } ,
    modalText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default SettingsModal

