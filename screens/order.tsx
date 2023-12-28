import { View, Text, FlatList, Pressable, Alert } from "react-native";

const data = [
  {
    id: 1,
    start: "8:00",
    end: "9:00",
    state: "En cours",
  },
];

const handleOrder = () => {
  console.log("Placer votre commande");
  Alert.alert("Placer votre commande");
};

const Order = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Order</Text>
      <FlatList data={data} renderItem={({ item }) => <Text>{item.id}</Text>} />
      <Pressable onPress={handleOrder}>
        <Text>Placer votre commande</Text>
      </Pressable>
    </View>
  );
};

export default Order;
