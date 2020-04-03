import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const NameInput = props => {
  const [enteredName, setEnteredName] = useState("");

  const nameInputHandler = enteredText => {
    setEnteredName(enteredText);
  };

  const nameInputReset = () => {
    setEnteredName("");
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.subHeaderTitle}>Please enter your name</Text>
      <View style={styles.inputDiv}>
        <TextInput
          onChangeText={nameInputHandler}
          placeholder="Write your name here"
          value={enteredName}
        ></TextInput>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonDiv}>
          <Button
            color="blue"
            style={styles.button}
            onPress={nameInputReset}
            title="Reset"
          />
        </View>
        <View style={styles.buttonDiv}>
          <Button
            color='blue'
            style={styles.button}
            onPress={props.onAddName.bind(this, enteredName)}
            title="Confirm"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  inputDiv: {
    marginVertical: 10,
    borderColor: "blue",
    borderWidth: 1,
    width: "70%",
    paddingVertical: 5,
    height: 30,
  },
  subHeaderTitle: {
    color: "#999999",
    fontSize: 14
  },
  buttonsContainer: {
    marginTop: 15,
    width: '55%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttonDiv: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  }
});

export default NameInput;
