import { StyleSheet, Text, TextInput, View } from "react-native";

const Journal = () => {
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>What do you want to write about?</Text>
      <TextInput style={styles.input} placeholder="Enter your text here"  multiline={true}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },    
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  journal: {
    fontSize: 16,
    fontWeight: "normal",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    
  },
});

export default Journal;