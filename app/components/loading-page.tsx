import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

export default function LoadingPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pissed off?</Text>
      <ActivityIndicator size="large" color="#ff4c4c" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
 
  },

    text: {
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 200,
        marginBottom: 100,
        color: "#ff4c4c",
  
   
  },

});
