import { buildMessage, isInt, isNumber, min, ValidateBy } from "class-validator";
export const IS_POSITIVE_INT = "isPositiveInt";
export function IsPositiveInt(validationOptions) {
  return ValidateBy(
    {
      name: IS_POSITIVE_INT,
      validator: {
        validate(value, args) {
          if (!isNumber(value, { allowInfinity: false, allowNaN: false })) {
            return false;
          }
          if (!min(value, 1)) {
            return false;
          }
          if (!isInt(value)) {
            return false;
          }
          return true;
        },
        defaultMessage: buildMessage(
          (eachPrefix) => eachPrefix + "$property must be a positive integer",
          validationOptions,
        ),
      },
    },
    validationOptions,
  );
}
