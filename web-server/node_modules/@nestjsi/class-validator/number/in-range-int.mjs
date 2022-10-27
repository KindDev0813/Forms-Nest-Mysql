import { buildMessage, isInt, max, min, ValidateBy } from "class-validator";
export function InRangeInt(minValue, maxValue, validationOptions) {
  return ValidateBy(
    {
      constraints: [minValue, maxValue],
      name: "InRangeInt",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            "'$property' must be an integer, not be less than $constraint1, not be greater than $constraint2..",
          validationOptions,
        ),
        validate(value, args) {
          if (!isInt(value)) {
            return false;
          }
          if (!isInt(args.constraints[0])) {
            return false;
          }
          if (!isInt(args.constraints[1])) {
            return false;
          }
          if (!min(value, args.constraints[0])) {
            return false;
          }
          if (!max(value, args.constraints[1])) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
