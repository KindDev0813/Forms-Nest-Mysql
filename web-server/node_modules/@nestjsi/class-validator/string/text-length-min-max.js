"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextLengthMinMax = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name TextLengthMinMax
 * @decorate
 * @description
 * Checks if the string's length is not more and less than given numbers.
 * If given value is not a string, then it returns false.
 * Note: this function takes into account surrogate pairs.
 * @summary ```import { TextLengthMinMax } from "@nestjsi/class-validator/string/text-length-min-max";```
 * @param {number} minLen The minimum length
 * @param {number} maxLen The maximum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
function TextLengthMinMax(minLen, maxLen, validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [minLen, maxLen],
        name: "TextLengthMinMax",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => `${eachPrefix}$property must be longer than $constraint1 characters or equal to $constraint2 characters`, validationOptions),
            validate: (value, args) => {
                if (!(0, class_validator_1.minLength)(value, args.constraints[0])) {
                    return false;
                }
                if (!(0, class_validator_1.maxLength)(value, args.constraints[1])) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
exports.TextLengthMinMax = TextLengthMinMax;
