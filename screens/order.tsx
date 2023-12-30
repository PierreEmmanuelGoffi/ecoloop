import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Text, FlatList, Alert, SafeAreaView, StyleSheet } from "react-native";

import { OrderButton, OrderItem } from "../components/order";
import { data } from "../data";

const Tab = createMaterialTopTabNavigator();

const handleOrder = () => {
  Alert.alert("Superbe!", "Nous nous chargeons du reste.");
};

const OrderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subheader}>
        Magasin #01 - 3335 av. Ridgewood H3V 1C2, Montréal, QC
      </Text>
      <FlatList
        data={data}
        renderItem={OrderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <OrderButton label="Commander" handleOrder={handleOrder} />
    </SafeAreaView>
  );
};

const DisposeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subheader}>
        Magasin #01 - 3335 av. Ridgewood H3V 1C2, Montréal, QC
      </Text>
      <FlatList
        data={data}
        renderItem={OrderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <OrderButton label="Disposer" handleOrder={handleOrder} />
    </SafeAreaView>
  );
};

const Order = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer independent>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarAllowFontScaling: true,
            tabBarInactiveTintColor: "gray",
            tabBarIndicatorContainerStyle: {
              backgroundColor: "transparent",
              borderRadius: 100,
            },
            tabBarIndicatorStyle: {
              backgroundColor: "#36454F",
              height: "100%",
              borderRadius: 45,
            },
            tabBarLabelStyle: {
              fontSize: 14,
            },
            tabBarStyle: {
              backgroundColor: "transparent",
              marginHorizontal: 10,
            },
            tabBarContentContainerStyle: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Tab.Screen name="Commande" component={OrderScreen} />
          <Tab.Screen name="Disposition" component={DisposeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1f22",
  },
  subheader: {
    fontSize: 18,
    color: "white",
    padding: 16,
  },
  orderButton: {
    backgroundColor: "green",
    borderRadius: 8,
    margin: 16,
    padding: 16,
    alignItems: "center",
  },
  orderButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
  orderButtonPressed: {
    opacity: 0.8,
  },
});

export default Order;
