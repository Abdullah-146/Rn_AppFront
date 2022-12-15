import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Dashboard from "./Pages/Dashboard";
// navigation

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Home = () => {
  return <Text style={{ paddingTop: 30 }}>HY World</Text>;
};

// tab navigation in
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#222222" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Schedule") {
            iconName = "th-large";
            size = focused ? 23 : 22;
            color = focused ? "#C38BFF" : "#AFAFAF";
          } else if (route.name === "Home") {
            iconName = "home";
            size = focused ? 23 : 22;
            color = focused ? "#C38BFF" : "#AFAFAF";
          } else if (route.name === "Chats") {
            iconName = "comment-dots";
            size = focused ? 23 : 22;
            color = focused ? "#C38BFF" : "#AFAFAF";
          } else if (route.name === "PI") {
            iconName = "user-circle";
            size = focused ? 23 : 22;
            color = focused ? "#C38BFF" : "#AFAFAF";
          } else if (route.name === "graph") {
            iconName = "mobile";
            size = focused ? 23 : 22;
            color = focused ? "#C38BFF" : "#AFAFAF";
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
        tabBarLabel: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
// tab navigation out

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeSign"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="WelcomeSign" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
