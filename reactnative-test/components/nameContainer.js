import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableWithoutFeedbackBase } from "react-native";

const NameContainer = props => {

    var username  = props.username;

    if (!username) {
        return (
            <View style={styles.nameContainer} ></View>
        )
    } else {
        return (
            <View style={styles.nameContainer} >
            <Text style={styles.normalText}>Your name is</Text>
            <Text style={[styles.normalText, styles.normalBold]}>{username}</Text>
            <View style={styles.deleteButton}>
                <Button color="red" onPress={props.onDeleteName.bind(this, TouchableWithoutFeedbackBase)} title="Delete"/>
            </View>
            </View>
          );
    }
};

const styles = StyleSheet.create({
    nameContainer: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: "center",
      },
      normalText : {
        fontSize: 20,
        paddingVertical: 5,
      },
      normalBold: {
          fontWeight: '800'
      },
      deleteButton: {
          marginTop: 20,
          paddingVertical: 10,
          paddingHorizontal: 15,
      }

});

export default NameContainer;
