import { View, Text, Pressable, StyleSheet } from "react-native";
import type { OrderItemProps } from "types";

export const OrderItem = ({ item }: OrderItemProps) => {
  return (
    <Pressable style={cardStyles.card}>
      <View style={cardStyles.content}>
        <Text style={cardStyles.time}>
          {item.start} - {item.end}
        </Text>
        <Text style={cardStyles.state}>{item.state}</Text>
      </View>
    </Pressable>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 20,
    fontWeight: "bold",
  },
  state: {
    fontSize: 20,
    color: "#888",
  },
});
