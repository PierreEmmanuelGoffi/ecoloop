import { View, Text, StyleSheet } from "react-native";

type ShopHeaderProps = {
  title: string;
};

const ShopHeader = ({ title }: ShopHeaderProps) => (
  <View style={styles.centered}>
    <Text style={styles.shop_name}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  shop_name: {
    color: "#fff",
    fontSize: 20,
    margin: 10,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ShopHeader;
