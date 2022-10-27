import { isNotEmpty, isString, registerDecorator } from "class-validator";
export function IsNotBlankString(validationOptions) {
  return function IsNotBlankStringDecorator(target, propertyKey) {
    registerDecorator({
      async: false,
      constraints: [],
      name: "IsNotBlankString",
      options: validationOptions,
      propertyName: propertyKey,
      target: target.constructor,
      validator: {
        defaultMessage: (validationArguments) => {
          return `[${validationArguments.property}] should not be a blank string`;
        },
        validate: (value) => {
          return isString(value) && isNotEmpty(value.trim());
        },
      },
    });
  };
}
