import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import MyText from "./MyText";
import { AntDesign } from "@expo/vector-icons";
const FlightComponent = (props) => {
  return (
    <View
      style={[
        {
          marginVertical: 10,
          padding: 5,
          elevation: 2,
          shadowColor: "#000",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 8,
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
          marginTop: 10,
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 1 */}
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 20, height: 20, borderRadius: 15 }}
            source={{
              uri: "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
            }}
          />
          <MyText
            style={{
              color: "#161616",
              lineHeight: 18,
              fontWeight: "500",
              fontSize: 12,
            }}
          >
            John Doe
          </MyText>
        </View>
        {/* 2 */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 15, height: 15, marginRight: 3 }}
            source={require("../assets/images/safecard.png")}
          />
          <MyText
            style={{
              color: "#161616",
              lineHeight: 18,
              fontWeight: "400",
              fontSize: 12,
            }}
          >
            5KG
          </MyText>
        </View>
        {/* 3 optional */}

        <MyText
          style={{
            fontWeight: "600",
            fontSize: 12,
            lineHeight: 18,
            color: "#161616",
          }}
        >
          {props.price ? "$500" : " "}
        </MyText>

        <Pressable>
          <MyText>
            More Details
            <AntDesign name="doubleright" size={11} color="black" />
          </MyText>
        </Pressable>
      </View>
    </View>
  );
};

export default FlightComponent;

const styles = StyleSheet.create({});
