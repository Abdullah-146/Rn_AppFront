import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "./MyText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Header = (props, { text = "Details" }) => {
  const handleClick = (action) => {
    props.handleClick(action);
  };

  return (
    <View style={[styles.container, styles.rowFlexed, props.style]}>
      {props.imageDisplay ? (
        <View style={[styles.rowFlexed]}>
          <Image
            style={{ width: 44, height: 44, borderRadius: 15, borderWidth: 1 }}
            source={{ uri: props.image }}
          />
          <View style={{ marginLeft: 13 }}>
            <MyText
              style={{ fontWeight: "500", fontSize: 15, lineHeight: 22.5 }}
            >
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
      ) : (
        <View style={[styles.rowFlexed]}>
          <Ionicons
            onPress={() => handleClick("Back")}
            name="chevron-back"
            size={24}
            color="black"
          />
          <MyText
            style={{
              marginLeft: 7,
              fontWeight: "500",
              fontSize: 18,
              lineheight: 27,
              color: "#161616",
            }}
          >
            {props.page} {text}
          </MyText>
        </View>
      )}

      <View style={[styles.rowFlexed]}>
        <MaterialCommunityIcons
          onPress={() => handleClick("Search")}
          name="magnify"
          size={24}
          color="black"
        />
        <Ionicons
          onPress={() => handleClick("Notification")}
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
