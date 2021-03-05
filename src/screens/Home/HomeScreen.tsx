import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={SS.container}>
      <Text style={SS.text}>This is Auth screen</Text>
    </View>
  );
};

const SS = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
