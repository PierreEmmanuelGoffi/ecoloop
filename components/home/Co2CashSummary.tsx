// CO2CashSummary.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CO2CashSummary = () => (
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
);

const styles = StyleSheet.create({
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
});

export default CO2CashSummary;
