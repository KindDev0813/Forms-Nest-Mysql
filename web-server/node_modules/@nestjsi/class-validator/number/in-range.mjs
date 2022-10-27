import { buildMessage, isNumber, max, min, ValidateBy } from "class-validator";
export function InRange(minValue, maxValue, maxDecimalPlaces, validationOptions) {
  return ValidateBy(
    {
      constraints: [minValue, maxValue, maxDecimalPlaces],
      name: "InRange",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have $constraint3 max decimal places.",
          validationOptions,
        ),
        validate(value, args) {
          if (!isNumber(value, { allowInfinity: false, allowNaN: false })) {
            return false;
          }
          if (!min(value, args.constraints[0])) {
            return false;
          }
          if (!max(value, args.constraints[1])) {
            return false;
          }
          if (!isNumber(value, { maxDecimalPlaces: args.constraints[2] })) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
