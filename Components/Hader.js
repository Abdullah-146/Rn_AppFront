import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "./MyText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Header = (props) => {
  return (
    <View style={[styles.container, styles.rowFlexed, props.style]}>
      <View style={[styles.rowFlexed]}>
        <Image
          style={{ width: 44, height: 44, borderRadius: 15, borderWidth: 1 }}
          source={{ uri: props.image }}
        />
        <View style={{ marginLeft: 13 }}>
          <MyText style={{ fontWeight: "500", fontSize: 15, lineHeight: 22.5 }}>
            Hi {props.name}
          </MyText>
          <MyText
            style={{
              color: "#9C9C9C",
              fontWeight: "400",
              fontSize: 13,
              lineHeight: 19.5,
            }}
          >
            {props.greeting}
          </MyText>
        </View>
      </View>
      <View style={[styles.rowFlexed]}>
        <MaterialCommunityIcons name="magnify" size={24} color="black" />
        <Ionicons
          name="notifications"
          style={{ marginLeft: 7 }}
          size={24}
          color="#200E32"
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  rowFlexed: {
    flexDirection: "row",
    alignItems: "center",
  },
});
