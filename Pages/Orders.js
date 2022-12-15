import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Hader";
import FlightComponent from "../Components/FlightComponent";

const Orders = () => {
  const [person, setPerson] = useState({
    image:
      "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
    name: "Shaheer",
  });

  const [title, settitle] = useState("In progress");

  return (
    <View style={styles.container}>
      <Header
        style={{ marginHorizontal: 20 }}
        image={person.image}
        name={person.name}
        greeting={"Good Morning"}
      />
      <View style={{ flexDirection: "row", marginTop: 8 }}>
        {/* 1 All*/}
        <Pressable
          style={{
            height: 32,
            width: 60,
            backgroundColor: title == "All" ? "#2A94F4" : "#DDDDDD",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => settitle("All")}
        >
          <Text style={{ color: "#fff", fontWeight: "400", fontSize: 13 }}>
            All
          </Text>
        </Pressable>
        {/* 1 All over */}
        {/* 2 In progress */}
        <Pressable
          style={{
            height: 32,
            width: 117,
            backgroundColor: title == "In progress" ? "#2A94F4" : "#DDDDDD",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 5,
          }}
          onPress={() => settitle("In progress")}
        >
          <Text style={{ color: "#fff", fontWeight: "400", fontSize: 13 }}>
            In progress
          </Text>
        </Pressable>
        {/* 2 In progress over */}
        {/* 3 In progress */}
        <Pressable
          style={{
            height: 32,
            width: 117,
            backgroundColor: title == "Completed" ? "#2A94F4" : "#DDDDDD",
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 5,
          }}
          onPress={() => settitle("Completed")}
        >
          <Text style={{ color: "#fff", fontWeight: "400", fontSize: 13 }}>
            Completed
          </Text>
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
        <FlightComponent
          price={true}
          style={{ width: "95%", borderWidth: 0.1 }}
        />
        <FlightComponent
          price={true}
          style={{ width: "95%", borderWidth: 0.1 }}
        />
        <FlightComponent
          price={true}
          style={{ width: "95%", borderWidth: 0.1 }}
        />
        <FlightComponent
          price={true}
          style={{ width: "95%", borderWidth: 0.1 }}
        />
      </View>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});
