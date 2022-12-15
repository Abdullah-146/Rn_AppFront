import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Hader";
import MyText from "../Components/MyText";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CustomInput from "../Components/CustomInput";
import { Foundation } from "@expo/vector-icons";
import Button from "../Components/Button";
import { Ionicons } from '@expo/vector-icons';

const OrderDetails = () => {
    const [person, setPerson] = useState({
        image:
          "https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000",
        name: "Shaheer",
        phone: "23442242522",
        email: "Huzayfah@gmail.com",
      });
    
      const [order, setOrder] = useState({
        price:500,
        avaSpace: 5,
     });

     const handleHeaderClicks = (action)=>{
        alert("The action: "+action+" will be performed")
     }

      return (
        <View style={[styles.container]}>
          <Header handleClick = {handleHeaderClicks} page={"Order"} style={{ marginHorizontal: 20 }} />
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
                    {order.avaSpace}KG of space
                  </MyText>
                </View>
                    {/* YOUR COMPONENET GOES HERE */}
              </View>
            </View>
    
            {/* Bidding View */}
            <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
              <MyText style={{ fontWeight: "500", fontSize: 13, lineheight: 19.5 }}>
                Delivery Proof
              </MyText>
                    
                {/* Picture Attached Compoenet */}
                <View style={{marginTop:11,width:"50%",borderRadius:12,flexDirection:"row",alignItems:"center", backgroundColor:"#ECECEC",paddingVertical:19,paddingHorizontal:13}}>
                    <Ionicons name="image-outline" size={24} color="black" />
                    <MyText style={{marginLeft:13,fontWeight:"500",fontSize:13,lineHeight:19.5,color:"#161616"}}>Picture Attached</MyText>
                </View>
            </View>
                
            {/* Bidding View */}
            <View style={{ paddingHorizontal: 20, marginTop: 30 }}>
              <MyText style={{ fontWeight: "500", fontSize: 13, lineheight: 19.5 }}>
                Bidding
              </MyText>
              <MyText
                style={{
                  marginTop: 8,
                  paddingTop:8,
                  fontWeight: "600",
                  fontSize: 24,
                  lineheight: 36,
                }}
              >
                ${order.price}
              </MyText>
            </View>
            <Button style={{marginTop:20, marginHorizontal:20}} text="Mark Complete" />
          </ScrollView>
        </View>)
}

export default OrderDetails

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      paddingTop: 40,
    },
})