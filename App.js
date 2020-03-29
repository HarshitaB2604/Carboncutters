import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Form from "./Form";

export default function App() {
  return (
    <View style={styles.container}>
      <div classNname="App">
        <Form />
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
