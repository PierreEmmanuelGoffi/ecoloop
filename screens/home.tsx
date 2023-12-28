import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const chartConfig = {
  backgroundColor: '#1e1f22',
  backgroundGradientFrom: '#1e1f22',
  backgroundGradientTo: '#1e1f22',
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
};

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 2, // optional
    },
  ],
};

const screenWidth = Dimensions.get('window').width;

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.shop_name}>Magasin #01</Text>
      </View>
      <View style={styles.co2_cash_container}>
        <Text style={styles.text_color}>Économies :</Text>
        <View style={styles.text_orientation_container}>
          <Text style={styles.text_color}>CO2 :</Text>
          <Text style={styles.text_color}>0.00 kg</Text>
        </View>
        <View style={styles.text_orientation_container}>
          <Text style={styles.text_color}>Cash :</Text>
          <Text style={styles.text_color}>0.00 $</Text>
        </View>
      </View>
      <View style={styles.co2_cash_container}>
        <Text style={styles.text_color}>Activités :</Text>
        <View style={styles.text_orientation_container}>
          <Text style={styles.text_color}>Boites livrées :</Text>
          <Text style={styles.text_color}>0</Text>
        </View>
        <View style={styles.text_orientation_container}>
          <Text style={styles.text_color}>Boites en attente :</Text>
          <Text style={styles.text_color}>0</Text>
        </View>
        <View style={styles.text_orientation_container}>
          <Text style={styles.text_color}>Boites disposées :</Text>
          <Text style={styles.text_color}>0</Text>
        </View>
        <View style={styles.text_orientation_container}>
          <Text style={styles.text_color}>Retours :</Text>
          <Text style={styles.text_color}>0</Text>
        </View>
        <View style={styles.text_orientation_container}>
          <Text style={styles.text_color}>On-time delivery :</Text>
          <Text style={styles.text_color}>0</Text>
        </View>
      </View>
      <View>
        <LineChart
          data={data}
          width={screenWidth}
          height={256}
          chartConfig={chartConfig}
          bezier
          style={styles.chart}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1f22',
  },
  shop_name: {
    color: '#fff',
    fontSize: 20,
    margin: 10,
  },
  co2_cash_container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#28282e',
  },
  text_orientation_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    margin: 5,
  },
  text_color: {
    color: '#fff',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});
