import { buildMessage, isInt, isNumber, max, min, ValidateBy } from "class-validator";
/**
 * @name MinMaxInt
 * @decorate
 * @description Checks is value between two integers inclusive.
 * @param {number} minimumInteger Minimum allowed integer
 * @param {number} maximumInteger Maximum allowed integer
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @deprecated Since `0.2.1`. Use `@IntMinMax` instead.
 */
export function MinMaxInt(minimumInteger, maximumInteger, validationOptions) {
  return ValidateBy(
    {
      constraints: [minimumInteger, maximumInteger],
      name: "MinMaxInt",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) =>
            eachPrefix +
            "'$property' must be an integer, not be less than $constraint1, not be greater than $constraint2.",
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
          if (!isInt(value)) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
