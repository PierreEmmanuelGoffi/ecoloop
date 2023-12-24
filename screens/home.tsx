import { View, Text } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text>Tableau de bord</Text>
        <Text>Magasin #01</Text>
      </View>
      <View>
        <Text>Boites livrées</Text>
        <Text>Boites en attente</Text>
        <Text>Boites disposées</Text>
        <Text>Retours</Text>
        <Text>On-time delivery</Text>
      </View>
      <View>
        <Text>Sommaire</Text>
      </View>
    </View>
  );
};

export default Home;
