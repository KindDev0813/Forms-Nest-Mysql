import { buildMessage, maxLength, minLength, ValidateBy } from "class-validator";
/**
 * @name TextLengthFixed
 * @decorate
 * @description
 * Checks if the string's length is not less or more than given number.
 * Removes whitespace from both ends of a string.
 * If given value is not a string, then it returns false.
 * @summary ```import { TextLengthFixed } from "@nestjsi/class-validator/string/text-length-fixed";```
 * @param {number} fixedLength The minimum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
export function TextLengthFixed(fixedLength, validationOptions) {
  return ValidateBy(
    {
      constraints: [fixedLength],
      name: "TextLengthFixed",
      validator: {
        defaultMessage: buildMessage(
          (eachPrefix) => `${eachPrefix}$property must be equal to $constraint1 characters`,
          validationOptions,
        ),
        validate: (value, args) => {
          const valueTrimmed = String(value).trim();
          if (!minLength(valueTrimmed, args.constraints[0]) || !maxLength(valueTrimmed, args.constraints[0])) {
            return false;
          }
          return true;
        },
      },
    },
    validationOptions,
  );
}
