import { View, Text, StyleSheet } from "react-native"
import { useState, useEffect } from "react"


// deprecated old history entry component use if calendar doesn't work
const Entry = ({entry}: any) => {



    const [text, setText] = useState(entry.text)
    const [date, setDate] = useState(entry.date)
   
    useEffect(() => {
        setText(entry.text)
        setDate(entry.date)
      
    }, [entry])

    return (
        <View >
          
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.text}>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})


export default Entry