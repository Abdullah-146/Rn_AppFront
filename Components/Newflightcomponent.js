import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import MyText from "./MyText";
import { AntDesign } from "@expo/vector-icons";
const FlightComponent = (props) => {
  return (
    <View
      style={[
        {
          marginVertical: 4,
          padding: 5,
          elevation: 2,
          shadowColor: "#000",
          justifyContent: "center",
          alignItems: "center",

          paddingBottom: 0,
          paddingHorizontal: 5,
        },
        props.style,
      ]}
    >
      {/* flight component in */}
      <View style={{ flexDirection: "row" }}>
        {/* text part */}
        <View style={{ alignItems: "center" }}>
          <MyText
            style={{
              color: "#2A94F4",
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 21,
            }}
          >
            Lon
          </MyText>
          <MyText
            style={{
              color: "#161616",
              fontSize: 12,
              fontWeight: "300",
              lineHeight: 18,
            }}
          >
            UK
          </MyText>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginHorizontal: 5,
          }}
        >
          <MyText style={{ fontSize: 14 }}>----------------------------</MyText>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{ marginTop: 5, marginHorizontal: 5 }}
              source={require("../assets/images/planee.png")}
            />
            <MyText
              style={{
                lineHeight: 15,
                color: "#000000",
                fontWeight: "600",
                fontSize: 10,
              }}
            >
              12 april
            </MyText>
          </View>
          <MyText style={{ fontSize: 14 }}>----------------------------</MyText>
        </View>
        <View style={{ alignItems: "center" }}>
          <MyText
            style={{
              color: "#161616",
              fontSize: 14,
              fontWeight: "500",
              lineHeight: 21,
            }}
          >
            ISB
          </MyText>
          <MyText
            style={{
              color: "#161616",
              fontSize: 12,
              fontWeight: "300",
              lineHeight: 18,
            }}
          >
            Pak
          </MyText>
        </View>
      </View>
      {/* flight component out */}
      {/* bottom bar */}
      <View
        style={{
          marginTop: 5,
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <MyText style={{ fontWeight: "500" }}>Flight No: 2455sd4c5</MyText>
      </View>
    </View>
  );
};

export default FlightComponent;

const styles = StyleSheet.create({});
