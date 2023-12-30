import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {
  View,
  Text,
  FlatList,
  Pressable,
  Alert,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { data } from "../data";

const Tab = createMaterialTopTabNavigator();

const handleOrder = () => {
  Alert.alert("Votre commande a bien été prise en compte");
};

type OrderItemProps = {
  item: (typeof data)[0];
};

const renderItem = ({ item }: OrderItemProps) => {
  return (
    <Pressable style={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.time}>
          {item.start} - {item.end}
        </Text>
        <Text style={styles.state}>{item.state}</Text>
      </View>
    </Pressable>
  );
};

const OrderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subheader}>
        Magasin #01 - 3335 av. Ridgewood H3V 1C2, Montréal, QC
      </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Pressable
        onPress={handleOrder}
        style={({ pressed }) => [
          styles.orderButton,
          pressed ? styles.orderButtonPressed : {},
        ]}
      >
        <Text style={styles.orderButtonText}>Placer votre commande</Text>
      </Pressable>
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
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Pressable
        onPress={handleOrder}
        style={({ pressed }) => [
          styles.orderButton,
          pressed ? styles.orderButtonPressed : {},
        ]}
      >
        <Text style={styles.orderButtonText}>Disposer les boites</Text>
      </Pressable>
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
  header: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  subheader: {
    fontSize: 18,
    color: "white",
    padding: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  time: {
    fontSize: 18,
    color: "black",
  },
  state: {
    fontSize: 18,
    color: "green",
    fontWeight: "bold",
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
