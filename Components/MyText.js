import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MyText = (props) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

export default MyText;

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    // fontFamily:"Poppins",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 21.66,
  },
});