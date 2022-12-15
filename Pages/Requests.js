import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Hader";
import FlightComponent from "../Components/FlightComponent";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import MyText from "../Components/MyText";

const Requests = () => {
  const [person, setPerson] = useState({
    image:
      "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
    name: "Shaheer",
  });

  const [title, settitle] = useState("In progress");

  const headerClick = (action) => {
    alert("Action : " + action + " will be performed");
  };

  return (
    <View style={styles.container}>
      <Header
        style={{ marginHorizontal: 20 }}
        image={person.image}
        name={person.name}
        greeting={"Good Morning"}
        text="Orders"
        handleClick={headerClick}
      />
      <View style={{ flexDirection: "row", marginTop: 8, width: "100%" }}>
        {/* 2 In progress */}
        <Pressable
          style={{
            height: 40,
            width: "50%",
            backgroundColor: "#fff",
            borderRadius: 5,
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 5,
            borderWidth: 1,
            padding: 8,
            flexDirection: "row",
          }}
          onPress={() => settitle("In progress")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="office-building"
              size={24}
              color="black"
            />
            <MyText
              style={{ color: "#16161647", fontWeight: "400", fontSize: 13 }}
            >
              Pickup
            </MyText>
          </View>
          <Entypo name="chevron-down" size={24} color="#16161647" />
        </Pressable>
        {/* 2 In progress over */}
        {/* 3 In progress */}
        <Pressable
          style={{
            height: 40,
            width: "47%",
            backgroundColor: "#fff",
            borderRadius: 5,
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: 5,
            borderWidth: 1,
            padding: 8,

            flexDirection: "row",
          }}
          onPress={() => settitle("Completed")}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="office-building"
              size={24}
              color="black"
            />
            <MyText
              style={{ color: "#16161647", fontWeight: "400", fontSize: 13 }}
            >
              Destination
            </MyText>
          </View>
          <Entypo name="chevron-down" size={24} color="#16161647" />
        </Pressable>
        {/* 3 In progress over */}
      </View>
      {/* component div */}
      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FlightComponent style={{ width: "95%", borderWidth: 0.1 }} />
        <FlightComponent style={{ width: "95%", borderWidth: 0.1 }} />
        <FlightComponent style={{ width: "95%", borderWidth: 0.1 }} />
        <FlightComponent style={{ width: "95%", borderWidth: 0.1 }} />
      </View>
    </View>
  );
};

export default Requests;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#fff",
  },
});
