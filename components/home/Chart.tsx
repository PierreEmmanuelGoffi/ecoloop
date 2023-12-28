// Chart.js
import React from 'react';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

type ChartProps = {
  data: {
    labels: string[];
    datasets: {
      data: number[];
      color: (opacity: number) => string;
      strokeWidth: number;
    }[];
  };
  chartConfig: {
    backgroundColor: string;
    backgroundGradientFrom: string;
    backgroundGradientTo: string;
    color: (opacity: number) => string;
    strokeWidth: number;
    barPercentage: number;
  };
};

const Chart = ({ data, chartConfig }: ChartProps) => (
  <>
    <Text style={styles.title}>Utilisation par mois</Text>
    <LineChart
      data={data}
      width={screenWidth}
      height={256}
      chartConfig={chartConfig}
      bezier
      style={styles.chart}
    />
  </>
);

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default Chart;
