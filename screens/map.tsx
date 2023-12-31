import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import MapView, { Region, Marker } from 'react-native-maps';

const Map: React.FC = () => {
  const [region, setRegion] = useState<Region | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [pins, setPins] = useState<Region[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        const userRegion = {
          latitude: currentLocation.coords.latitude,
          longitude: currentLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setRegion(userRegion);
        setPins(generateRandomPins(userRegion, 10));
      } catch {
        setErrorMsg('Error while accessing location');
      }
    })();
  }, []);

  const generateRandomPins = (
    centerRegion: Region,
    count: number
  ): Region[] => {
    const pinsArray: Region[] = [];
    for (let i = 0; i < count; i++) {
      const randomLatitudeOffset =
        (Math.random() - 0.5) * (centerRegion.latitudeDelta / 2);
      const randomLongitudeOffset =
        (Math.random() - 0.5) * (centerRegion.longitudeDelta / 2);
      pinsArray.push({
        latitude: centerRegion.latitude + randomLatitudeOffset,
        longitude: centerRegion.longitude + randomLongitudeOffset,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0011,
      });
    }
    return pinsArray;
  };

  if (errorMsg) {
    return (
      <View style={styles.centered}>
        <Text>{errorMsg}</Text>
      </View>
    );
  }

  if (!region) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          title="Your Location"
        />
        {/* Render random pins */}
        {pins.map((pin, index) => (
          <Marker
            key={index}
            coordinate={pin}
            title={`Stockage ${index + 1}: 10 boites disponibles`}
          />
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
