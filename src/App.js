import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Clipboard, TextInput } from "react-native";

class App extends Component {
  render() {
    return <View style={styles.app}></View>;
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    width: "100%",
    backgroundColor: "yellow"
  }
});

export default App;
