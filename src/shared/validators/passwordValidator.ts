/**
 * Валидаторы для нового пароля, проверяют поле ввода
 * на длину, наличие заглавных, строчных, и специальных
 * символов, а также хотя бы одной цифры.
 */

// Спецсимволы кроме разрешенных #, $, ~, %
const REGEXP_EXCLUDE_CHARACTERS = /[`!@^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/;

// Полный список запрещеных специсимволов
const REGEXP_SPECIAL_CHARACTERS = /[`!@^&*()_|+\-=?;:'",.#$~%<>\{\}\[\]\\\/]/;

// Заглавные символы
const REGEXP_UPPERCASE = /[A-Z]/;

// Строчные символы
const REGEXP_LOWERCASE = /[a-z]/;

// Хотя бы одна цифра
const REGEXP_ONE_DIGIT = /.*[0-9].*/;

// Присутствует кириллица
const REGEXP_CYRILLIC = /[а-яА-ЯЁё]/;

const isLength = (
  range: {min: number; max: number},
  value?: string,
): boolean => {
  if (value) {
    const {min, max} = range;
    const length = value.length;

    if (length >= min && length <= max) {
      return true;
    }
  }

  return false;
};

export const passwordValidator = (args: { min: number; max: number; validateSpecialChar?: boolean }) => {
  const {min, max} = args;
  return {
    requiredToFill: (value?: string) => !value ? 'Обязательно для заполнения. ' : undefined,
    minMaxLength: (value?: string) => value && !isLength({min, max}, value) ? `Длина пароля должна быть от ${min} до ${max} символов. ` : undefined,
    specialChar: (value?: string) => {
      if (value && args.validateSpecialChar) {
        return REGEXP_SPECIAL_CHARACTERS.test(value) ? 'Спецсимволы запрещены. ' : undefined;
      }
      return value && REGEXP_EXCLUDE_CHARACTERS.test(value) ? 'Можно использовать только спец. символы: #,$,~,%. ' : undefined;
    },
    uppercaseLetter: (value?: string) => value && !REGEXP_UPPERCASE.test(value) ? 'Используйте хотя бы один заглавный символ. ' : undefined,
    lowercaseLetter: (value?: string) => value && !REGEXP_LOWERCASE.test(value) ? 'Используйте хотя бы один строчный символ. ' : undefined,
    atLeastOneDigit: (value?: string) => value && !REGEXP_ONE_DIGIT.test(value) ? 'Используйте хотя бы одну цифру. ' : undefined,
    cyrillicLetters: (value?: string) => value && REGEXP_CYRILLIC.test(value) ? 'Пароль должен содержать только латинские буквы. ' : undefined,
  };
};
