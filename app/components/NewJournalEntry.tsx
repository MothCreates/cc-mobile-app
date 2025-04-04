import { StyleSheet, Text, TextInput, View, Pressable, } from "react-native";
import { useState, useContext } from "react";
import { createJournalEntry } from "../../lib/functions";
import { router } from "expo-router";
import ExitButton from "./buttons/exit";
import DoneButton from "./buttons/done";
import ThemeContext from "../theme/themeContext";
interface JournalProps {
  setSelectedPrompt: (prompt: string) => void
  isUpdate: boolean
} 

// this takes a parameter setSelectedPrompt and is a react component with parent app/index.tsx
//TODO add isUpdate to the component
const NewJournalEntry : React.FC<JournalProps> = ({ setSelectedPrompt }) => {

   const { theme } = useContext(ThemeContext)
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
// 3 layer grid layout
// 1. row of buttons at the top
// 2. input field in the middle
// 3. 
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <ExitButton />
        <Text style={[styles.prompt, { color: theme.color }]}>Vent</Text>
        <DoneButton onSubmit={onSubmit} newPrompt={newPrompt} />
 
  
      </View>
      <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { color: theme.color }]}
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
  topRow : {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 400,
    
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

export default NewJournalEntry;


