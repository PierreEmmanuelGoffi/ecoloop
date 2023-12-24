import { View, Text, Pressable } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home Screen</Text>
      <Pressable
        onPress={() => {
          console.log('Pressed');
        }}
      >
        <Text>Press Me</Text>
      </Pressable>
    </View>
  );
};

export default Home;
