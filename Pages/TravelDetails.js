import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Hader";
import MyText from "../Components/MyText";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomInput from "../Components/CustomInput";
import { Foundation } from "@expo/vector-icons";
import Button from "../Components/Button";
import FlightComponent from "../Components/Newflightcomponent";

const TravelDetails = () => {
  const [person, setPerson] = useState({
    image:
      "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
    name: "Shaheer",
    phone: "23442242522",
    email: "Huzayfah@gmail.com",
  });

  const [trip, setTrip] = useState({
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ",
    avaSpace: 5,
    pricePerKg: 500,
  });
  return (
    <View style={[styles.container]}>
      <Header page={"Trip"} style={{ marginHorizontal: 20 }} />
      <ScrollView>
        {/* Person Details */}
        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
          <MyText style={{ fontWeight: "500", fontSize: 13, lineheight: 19.5 }}>
            Person Details
          </MyText>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 32, height: 32, borderRadius: 32 }}
              source={{ uri: person.image }}
            />
            <MyText
              style={{
                marginLeft: 12,
                fontWeight: "400",
                fontSize: 12,
                lineheight: 18,
              }}
            >
              {person.name}
            </MyText>
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="phone-alt" size={24} color="black" />
            <MyText
              style={{
                marginLeft: 12,
                fontWeight: "400",
                fontSize: 12,
                lineheight: 18,
              }}
            >
              {person.phone}
            </MyText>
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="email" size={24} color="black" />
            <MyText
              style={{
                marginLeft: 12,
                fontWeight: "400",
                fontSize: 12,
                lineheight: 18,
              }}
            >
              {person.email}
            </MyText>
          </View>
        </View>

        {/* Description View */}
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <MyText style={{ fontWeight: "500", fontSize: 13, lineheight: 19.5 }}>
            Description
          </MyText>
          <MyText
            style={{
              marginTop: 8,
              fontWeight: "400",
              fontSize: 13,
              lineheight: 19.5,
            }}
          >
            {trip.desc} of space
          </MyText>
        </View>

        {/* PUT YOUR COMPONENT IN THIS VIEW */}
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <MyText style={{ fontWeight: "500", fontSize: 13, lineheight: 19.5 }}>
            Flight Detail
          </MyText>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../assets/images/WeightMachine.png")}
              />
              <MyText
                style={{
                  marginLeft: 12,
                  fontWeight: "400",
                  fontSize: 12,
                  lineheight: 18,
                }}
              >
                {trip.avaSpace}KG of space
              </MyText>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: 34,
              }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../assets/images/DollarCircled.png")}
              />
              <MyText
                style={{
                  marginLeft: 12,
                  fontWeight: "400",
                  fontSize: 12,
                  lineheight: 18,
                }}
              >
                ${trip.pricePerKg}/kg
              </MyText>
            </View>
          </View>
          <FlightComponent />
        </View>

        {/* Bidding View */}
        <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
          <MyText style={{ fontWeight: "500", fontSize: 13, lineheight: 19.5 }}>
            Bidding
          </MyText>
          <CustomInput style={{ marginTop: 15 }} placeholder={"Enter Amount"} />
          <CustomInput
            style={{ marginTop: 15 }}
            placeholder={"Enter your message here"}
          />
        </View>
        <Button
          style={{ marginTop: 20, marginHorizontal: 20 }}
          text="Bid Now"
        />
      </ScrollView>
    </View>
  );
};

export default TravelDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
