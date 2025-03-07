import { StyleSheet, Text, TextInput, View, Pressable } from "react-native";
import { useState } from "react";

interface JournalProps {
  setSelectedPrompt: (prompt: string) => void
}


// this takes a parameter setSelectedPrompt and is a react component with parent app/index.tsx
const Journal : React.FC<JournalProps> = ({ setSelectedPrompt }) => {


  const [newPrompt, setNewPrompt] = useState<string | null>(null)

const examplePrompts = [
  "What is pissing you off?",
  "Im so mad at my boss because...",
  "My parents are so annoying...",
  "My boyfriend made me cry..."
]



const handlePromptPress = (prompt: string) => {
  setSelectedPrompt(prompt)
}

  return (
    <View style={styles.container}>
      {examplePrompts.map((prompt, index) => (
        <Pressable key={index} style={styles.prompt} onPress={() => handlePromptPress(prompt)}>
          <Text key={index} style={styles.prompt}>{prompt}</Text>
        </Pressable>
      ))}
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  prompt: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  }
});

export default Journal;