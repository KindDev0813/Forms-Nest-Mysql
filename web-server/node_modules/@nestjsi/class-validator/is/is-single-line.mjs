import { registerDecorator } from "class-validator";
export function IsSingleLine(validationOptions) {
  return function ClassValidatorCustomIsSingleLine(object, propertyKey) {
    registerDecorator({
      async: false,
      constraints: [],
      name: "IsSingleLine",
      options: {
        message: "The text should be a single line",
        ...validationOptions,
      },
      propertyName: propertyKey,
      target: object.constructor,
      validator: {
        validate(value) {
          return typeof value === "string" && /\r?\n|\r/g.test(value);
        },
      },
    });
  };
}
