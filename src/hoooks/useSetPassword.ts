import {useState} from 'react';
import {passwordValidator} from '../shared/validators/passwordValidator';

type PasswordValueType = string | undefined;

export const useSetPassword = (value: PasswordValueType) => {
  const [password, setPassword] = useState<PasswordValueType>(undefined);
  const [passwordError, setPasswordError] = useState<PasswordValueType>(
    undefined,
  );

  const onChangePassword = () => {
    setPassword(value);
  };

  const onClearPassword = () => {
    setPassword(undefined);
  };

  const onPasswordBlur = () => {
    if (password) {
      const passValidator = Object.values(passwordValidator({min: 8, max: 32}));
      const errors = passValidator.map((val) => val(password));
      const filteredErrors = errors.filter((el) => el).join('');

      if (filteredErrors) {
        setPasswordError(filteredErrors);
      }
    }
  };

  return [
    {password, passwordError},
    onChangePassword,
    onClearPassword,
    onPasswordBlur,
  ];
};
