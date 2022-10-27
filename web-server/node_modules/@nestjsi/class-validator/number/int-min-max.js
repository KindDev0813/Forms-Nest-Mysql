"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntMinMax = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IntMinMax
 * @decorate
 * @description Checks is value between two integers inclusive.
 * @summary ```import { IntMinMax } from "@nestjsi/class-validator/number/int-min-max";```
 * @param {number} minimumInteger Minimum allowed integer
 * @param {number} maximumInteger Maximum allowed integer
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
function IntMinMax(minimumInteger, maximumInteger, validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [minimumInteger, maximumInteger],
        name: "IntMinMax",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => `${eachPrefix}'$property' must be an integer, not be less than $constraint1, not be greater than $constraint2.`, validationOptions),
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
                if (!(0, class_validator_1.isInt)(value)) {
                    return false;
                }
                return true;
            },
        },
    }, validationOptions);
}
exports.IntMinMax = IntMinMax;
