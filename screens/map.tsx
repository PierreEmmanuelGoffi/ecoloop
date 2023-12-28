import { View } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1, width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 45.508888,
          longitude: -73.561668,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default Map;
