import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>React Native Test App</Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    headerContainer: {
        height: 100,
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: "center",
        backgroundColor: 'blue',
        paddingLeft: 20,
        paddingTop: 30,
      },
      headerTitle: {
        color: 'white',
        fontSize: 26,
      },
  })