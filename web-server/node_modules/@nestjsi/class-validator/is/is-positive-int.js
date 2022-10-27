"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsPositiveInt = exports.IS_POSITIVE_INT = void 0;
const class_validator_1 = require("class-validator");
exports.IS_POSITIVE_INT = "isPositiveInt";
/**
 * @name IsPositiveInt
 * @decorate
 * @description Checks is value positive integer.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
function IsPositiveInt(validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        name: exports.IS_POSITIVE_INT,
        validator: {
            validate(value, args) {
                if (!(0, class_validator_1.isNumber)(value, { allowInfinity: false, allowNaN: false })) {
                    return false;
                }
                if (!(0, class_validator_1.min)(value, 1)) {
                    return false;
                }
                if (!(0, class_validator_1.isInt)(value)) {
                    return false;
                }
                return true;
            },
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix + "$property must be a positive integer", validationOptions),
        },
    }, validationOptions);
}
exports.IsPositiveInt = IsPositiveInt;
