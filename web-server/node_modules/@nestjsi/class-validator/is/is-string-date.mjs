import { registerDecorator } from "class-validator";
export function IsStringDate(validationOptions) {
  return function ClassValidatorCustomIsStringDate(object: Object, propertyName: string): void {
    registerDecorator({
      constraints: [],
      name: "IsStringDate",
      options: {
        message: "Date should be in [YYYY-MM-DD] format",
        ...validationOptions,
      },
      propertyName,
      target: object.constructor,
      validator: {
        validate(value: unknown): boolean {
          return typeof value === "string" && /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i.test(value);
        },
      },
    });
  };
}
