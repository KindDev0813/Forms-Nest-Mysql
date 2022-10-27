import { buildMessage, isBoolean, isNumber, isString, ValidateBy } from "class-validator";
export function IsJSON(validationOptions) {
  return ValidateBy(
    {
      constraints: [],
      name: "IsJSON",
      validator: {
        defaultMessage: buildMessage((eachPrefix) => eachPrefix + "$property must be a valid JSON", validationOptions),
        validate(value) {
          if (value === undefined) {
            return false;
          }
          if (value === null) {
            return true;
          }
          if (isString(value)) {
            return true;
          }
          if (isBoolean(value)) {
            return true;
          }
          if (isNumber(value)) {
            return isNumber(value, { allowInfinity: false, allowNaN: false });
          }
          try {
            JSON.stringify(value);
            return true;
          } catch {
            return false;
          }
        },
      },
    },
    validationOptions,
  );
}
