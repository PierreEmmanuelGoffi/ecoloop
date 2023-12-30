// Home.js
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import {
  Chart,
  ActivitySummary,
  CO2CashSummary,
  ShopHeader,
} from "../components/home";

const activities = [
  {
    label: "Boites livrées",
    value: 10,
  },
  {
    label: "Boites en attente",
    value: 20,
  },
  {
    label: "Boites disposées",
    value: 30,
  },
  {
    label: "Retours",
    value: 30,
  },
  {
    label: "On-Time delivery",
    value: 30,
  },
];

const chartData = {
  labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundColor: "#1e1f22",
  backgroundGradientFrom: "#1e1f22",
  backgroundGradientTo: "#1e1f22",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
};

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ShopHeader title="Magasin #01" />
      <CO2CashSummary />
      <ActivitySummary activities={activities} />
      <Chart data={chartData} chartConfig={chartConfig} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1f22",
  },
});

export default Home;
