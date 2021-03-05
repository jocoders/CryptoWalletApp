import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Button, Icon} from 'native-base';
import {passwordValidator} from '../../shared/validators/passwordValidator';

type CredentialType = string | undefined;

const AuthScreen = ({route, navigation}) => {
  const [isUser, setIsUser] = useState(false);
  const [name, setName] = useState<CredentialType>(undefined);
  const [email, setEmail] = useState<CredentialType>(undefined);
  const [password, setPassword] = useState<CredentialType>(undefined);
  const [passwordError, setPasswordError] = useState<CredentialType>(undefined);
  const passValidator = Object.values(passwordValidator({min: 8, max: 32}));

  useEffect(() => {
    if (route.params?.user) {
      setIsUser(true);
    }
  }, [route.params?.user]);

  const onPasswordBlur = () => {
    if (password) {
      const errors = passValidator.map((val) => val(password));
      const filterErrors = errors.filter((el) => el).join('');

      setPasswordError(filterErrors);
    }
  };

  const onChangeName = (value: string) => {
    setName(value);
  };

  const clearName = () => {
    setName(undefined);
  };

  const onChangeEmail = (value: string) => {
    setEmail(value);
  };

  const clearEmail = () => {
    setEmail(undefined);
  };

  const onChangePassword = (value: string) => {
    setPassword(value);
  };

  const clearPassword = () => {
    setPassword(undefined);
    setPasswordError(undefined);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={SS.container}>
      <Text style={SS.text}>Please fill the form</Text>
      {!isUser && (
        <View style={SS.inputContainer}>
          <TextInput
            style={SS.textInput}
            autoCapitalize={'words'}
            placeholder={'Name'}
            onChangeText={onChangeName}
            placeholderTextColor={'white'}
            value={name}
          />
          <TouchableOpacity style={SS.buttonIcon} onPress={clearName}>
            <Icon name={'close'} style={SS.icon} />
          </TouchableOpacity>
        </View>
      )}
      <View style={SS.inputContainer}>
        <TextInput
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          style={SS.textInput}
          placeholder={'Email'}
          onChangeText={onChangeEmail}
          placeholderTextColor={'white'}
          value={email}
        />
        <TouchableOpacity style={SS.buttonIcon} onPress={clearEmail}>
          <Icon name={'close'} style={SS.icon} />
        </TouchableOpacity>
      </View>

      <View style={SS.passContainer}>
        <View style={SS.inputContainer}>
          <TextInput
            autoCapitalize={'none'}
            onBlur={onPasswordBlur}
            style={SS.textInput}
            placeholder={'Password'}
            onChangeText={onChangePassword}
            placeholderTextColor={'white'}
            value={password}
          />
          <TouchableOpacity style={SS.buttonIcon} onPress={clearPassword}>
            <Icon name={'close'} style={SS.icon} />
          </TouchableOpacity>
        </View>
        <Text style={SS.errorText}>{passwordError}</Text>
      </View>
    </KeyboardAvoidingView>
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
  textInput: {
    height: 40,
    padding: 6,
    color: 'white',
    flex: 9,
  },
  inputContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    padding: 6,
    marginVertical: 8,
    color: 'white',
  },
  passContainer: {
    flexDirection: 'column',
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
  buttonIcon: {
    alignItems: 'center',
    flex: 1,
  },
  errorText: {
    color: 'white',
  },
  icon: {
    color: '#007AFF',
  },
});

export default AuthScreen;
