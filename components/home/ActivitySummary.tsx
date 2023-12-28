import { View, Text, StyleSheet } from "react-native";

type ActivitySummaryProps = {
  activities: {
    label: string;
    value: number;
  }[];
};

const ActivitySummary = ({ activities }: ActivitySummaryProps) => (
  <View style={styles.co2_cash_container}>
    <Text style={styles.text_color}>Activités :</Text>
    {activities.map((activity) => (
      <View style={styles.text_orientation_container} key={activity.label}>
        <Text style={styles.text_color}>{activity.label} :</Text>
        <Text style={styles.text_color}>{activity.value}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  co2_cash_container: {
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#28282e",
  },
  text_orientation_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    margin: 5,
  },
  text_color: {
    color: "#fff",
  },
});

export default ActivitySummary;
