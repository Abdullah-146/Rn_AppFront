import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Hader";
import FlightComponent from "../Components/FlightAcceptDecline";
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

      {/* component div */}
      <ScrollView
        style={{
          flexDirection: "column",
        }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <FlightComponent style={{ width: "95%", borderWidth: 0.1 }} />
        <FlightComponent style={{ width: "95%", borderWidth: 0.1 }} />
        <FlightComponent style={{ width: "95%", borderWidth: 0.1 }} />
        <FlightComponent style={{ width: "95%", borderWidth: 0.1 }} />
      </ScrollView>
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
