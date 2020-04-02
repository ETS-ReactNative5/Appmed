import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/header.js";
import NameInput from "./components/input.js";
import NameContainer from "./components/nameContainer.js"

export default function App() {
  const [userName, setUserName] = useState('');

  const addNameHandler = nameEntered => { 
    setUserName(nameEntered);
  };

  const deleteNameHandler = () => {
    setUserName('');
  } 

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          Welcome in this React Native test application !
        </Text>
      </View>
      <NameInput onAddName={addNameHandler} />
      <View style={styles.inputContainer}></View>
      <NameContainer onDeleteName={deleteNameHandler} username={userName}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: '100%'
  },
  titleContainer: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    width: "80%"
  },
  title: {
    fontSize: 26,
    textAlign: "center"
  },
  inputContainer: {
    height: 50
  },

});
