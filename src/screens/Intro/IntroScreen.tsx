import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';

const IntroScreen = ({navigation}) => {
  const navigateToSignIn = () => {
    navigation.navigate('Auth', {
      user: true,
    });
  };

  const navigateToSignUp = () => {
    navigation.navigate('Auth');
  };

  return (
    <View style={SS.container}>
      <Text style={SS.text}>Welcome to Jocryptowallet</Text>
      <Button primary style={SS.button} onPress={navigateToSignIn}>
        <Text style={SS.buttonText}>Sign in</Text>
      </Button>
      <Button primary style={SS.button} onPress={navigateToSignUp}>
        <Text style={SS.buttonText}>Sign up</Text>
      </Button>
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
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
  buttonText: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    marginVertical: 8,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default IntroScreen;
