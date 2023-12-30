import { Pressable, Text, StyleSheet } from "react-native";

type OrderButtonProps = {
  label: string;
  handleOrder: () => void;
};

const OrderButton = ({ label, handleOrder }: OrderButtonProps) => {
  return (
    <Pressable
      onPress={handleOrder}
      style={({ pressed }) => [
        styles.orderButton,
        pressed ? styles.orderButtonPressed : {},
      ]}
    >
      <Text style={styles.orderButtonText}>{label}</Text>
    </Pressable>
  );
};

export default OrderButton;

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
