import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import type { IconName } from "types";

import Icon from "../components/Icon";
import Home from "../screens/home";
import Map from "../screens/map";
import Order from "../screens/order";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: IconName = "home";

            if (route.name === "Tableau de bord") {
              iconName = "home";
            } else if (route.name === "Carte") {
              iconName = "map";
            } else if (route.name === "Commande") {
              iconName = "order";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: "#36454F",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Tableau de bord" component={Home} />
        <Tab.Screen name="Carte" component={Map} />
        <Tab.Screen name="Commande" component={Order} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Navigation;
