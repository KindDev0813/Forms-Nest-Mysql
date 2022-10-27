"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsJSON = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IsJSON
 * @decorate
 * @description Checks value to the possibility to be valid JSON.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators.
 * @returns {PropertyDecorator}
 * @since 0.2.2
 */
function IsJSON(validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [],
        name: "IsJSON",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix + "$property must be a valid JSON", validationOptions),
            validate(value) {
                if (value === undefined) {
                    return false;
                }
                if (value === null) {
                    return true;
                }
                if ((0, class_validator_1.isString)(value)) {
                    return true;
                }
                if ((0, class_validator_1.isBoolean)(value)) {
                    return true;
                }
                if ((0, class_validator_1.isNumber)(value)) {
                    return (0, class_validator_1.isNumber)(value, { allowInfinity: false, allowNaN: false });
                }
                try {
                    JSON.stringify(value);
                    return true;
                }
                catch {
                    return false;
                }
            },
        },
    }, validationOptions);
}
exports.IsJSON = IsJSON;
