"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MinMax = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name MinMax
 * @decorate
 * @description Checks if a value is in a range of values.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
function MinMax(minValue, maxValue, validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [minValue, maxValue],
        name: "MinMax",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix +
                "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2.", validationOptions),
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
                return true;
            },
        },
    }, validationOptions);
}
exports.MinMax = MinMax;
