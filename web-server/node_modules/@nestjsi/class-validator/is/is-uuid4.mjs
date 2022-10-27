import { buildMessage, isUUID, ValidateBy } from "class-validator";
export function IsUUID4(validationOptions) {
  return ValidateBy(
    {
      constraints: [],
      name: "IsUUID4",
      validator: {
        defaultMessage: buildMessage((eachPrefix) => eachPrefix + "$property must be an UUID", validationOptions),
        validate: (value) => isUUID(value, 4),
      },
    },
    validationOptions,
  );
}
