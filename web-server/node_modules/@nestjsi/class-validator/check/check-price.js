"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPrice = exports.PRICE_MAX = void 0;
const class_validator_1 = require("class-validator");
exports.PRICE_MAX = 562949953421311;
/**
 * @name CheckPrice
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @summary ```import { CheckPrice } from "@nestjsi/class-validator/check/check-price";```
 * @param {number=} [maxValue=562949953421311] The maximum value
 * @param {number=} [minValue=0.01] The minimum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
function CheckPrice(maxValue = exports.PRICE_MAX, minValue = 0.01, validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [minValue, maxValue],
        name: "CheckPrice",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => `${eachPrefix}'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.`, validationOptions),
            validate(value, args) {
                if (!(0, class_validator_1.isNumber)(value, { allowInfinity: false, allowNaN: false, maxDecimalPlaces: 2 })) {
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
exports.CheckPrice = CheckPrice;
