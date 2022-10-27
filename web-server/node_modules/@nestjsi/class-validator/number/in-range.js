"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InRange = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name InRange
 * @decorate
 * @description Checks if a value is in a range of values.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {number=} maxDecimalPlaces Max decimal places
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
function InRange(minValue, maxValue, maxDecimalPlaces, validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [minValue, maxValue, maxDecimalPlaces],
        name: "InRange",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix +
                "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have $constraint3 max decimal places.", validationOptions),
            validate(value, args) {
                if (!(0, class_validator_1.isNumber)(value, { allowInfinity: false, allowNaN: false })) {
                    return false;
                }
                if (!(0, class_validator_1.min)(value, args.constraints[0])) {
                    return false;
                }
                if (!(0, class_validator_1.max)(value, args.constraints[1])) {
                    return false;
                }
                if (!(0, class_validator_1.isNumber)(value, { maxDecimalPlaces: args.constraints[2] })) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
exports.InRange = InRange;
