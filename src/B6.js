import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const B6 = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Hình vuông ${index + 1}`} />
      ))}
    </ScrollView>
  );
};

const Square = ({ text, bgcolor = "#7ce0f9" }) => (
  <View style={[styles.square, { backgroundColor: bgcolor }]}>
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default B6;
