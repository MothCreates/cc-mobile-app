import { StyleSheet, Text, TextInput, View, Pressable, } from "react-native";
import { useState } from "react";
import { createJournalEntry } from "../../lib/functions";
import { router } from "expo-router";
interface JournalProps {
  setSelectedPrompt: (prompt: string) => void
  isUpdate: boolean
} 

// this takes a parameter setSelectedPrompt and is a react component with parent app/index.tsx
//TODO add isUpdate to the component
const Journal : React.FC<JournalProps> = ({ setSelectedPrompt }) => {


  const [newPrompt, setNewPrompt] = useState<string | null>(null)

  



  const examplePrompts = "My boss is so annoyong because..."


const onSubmit = (prompt: string | null) => {
  if (prompt) {
    setSelectedPrompt(prompt)
    createJournalEntry(prompt).then((data) => {
      console.log('data', data)
      router.push('/components/history')
    })
   
  }
}

  return (
    <View style={styles.container}>
      <View style={styles.ventContainer}>
      <Pressable style={styles.submitButton} onPress={() => onSubmit(newPrompt)}>
            <Text style={styles.submitButtonText}>Done</Text>
          </Pressable>
          <Text style={styles.prompt}>Vent</Text>
  
      </View>
      <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline={true}
            onChangeText={setNewPrompt}
            placeholder={examplePrompts}
            
          />
  
     </View>

    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: "center",
  },
  prompt: {
    fontSize: 20,
 
    marginBottom: 10,
  },
  ventContainer : {
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
});

export default Journal;


