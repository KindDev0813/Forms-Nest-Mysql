import { isNotEmpty, isString, registerDecorator } from "class-validator";
export function IsNotNull(validationOptions) {
  return function IsNotNullDecorator(target, propertyKey) {
    registerDecorator({
      async: false,
      constraints: [],
      name: "IsNotNull",
      options: validationOptions,
      propertyName: propertyKey,
      target: target.constructor,
      validator: {
        defaultMessage: (validationArguments) => {
          return `[${validationArguments.property}] should not be null`;
        },
        validate: (value) => {
          return isString(value) && isNotEmpty(value);
        },
      },
    });
  };
}
