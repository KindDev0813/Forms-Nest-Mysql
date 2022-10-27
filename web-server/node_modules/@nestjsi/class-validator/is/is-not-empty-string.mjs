import { isNotEmpty, isString, registerDecorator } from "class-validator";
export function IsNotEmptyString(validationOptions) {
  return function IsNotEmptyStringDecorator(target, propertyKey) {
    registerDecorator({
      async: false,
      constraints: [],
      name: "IsNotEmptyString",
      options: validationOptions,
      propertyName: propertyKey,
      target: target.constructor,
      validator: {
        defaultMessage: (validationArguments) => {
          return `[${validationArguments.property}] should not be an empty string`;
        },
        validate: (value) => {
          return isString(value) && isNotEmpty(value);
        },
      },
    });
  };
}
