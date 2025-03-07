
import { StyleSheet, Text, View } from "react-native";
import Journal from "./journal";
const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Journal/>
    </View>
  );
};

export default Title;

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
 
}); 