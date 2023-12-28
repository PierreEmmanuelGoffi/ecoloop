import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import Home from "../screens/home";
import Map from "../screens/map";
import Order from "../screens/order";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tableau de bord" component={Home} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Order" component={Order} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default Navigation;
