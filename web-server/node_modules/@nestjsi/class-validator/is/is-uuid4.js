"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUUID4 = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IsUUID4
 * @decorate
 * @description Checks if the string is a UUID version 4. If given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
function IsUUID4(validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [],
        name: "IsUUID4",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix + "$property must be an UUID", validationOptions),
            validate: (value) => (0, class_validator_1.isUUID)(value, 4),
        },
    }, validationOptions);
}
exports.IsUUID4 = IsUUID4;
