"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Money = exports.MAX_SAFE_FLOAT = void 0;
const class_validator_1 = require("class-validator");
exports.MAX_SAFE_FLOAT = 562949953421311;
/**
 * @name Money
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {number=} [maxValue=562949953421311] The maximum value
 * @param {number=} [minValue=0.01] The minimum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.4
 * @deprecated Since 0.2.1. Use `@CheckPrice` instead.
 */
function Money(maxValue = exports.MAX_SAFE_FLOAT, minValue = 0.01, validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [minValue, maxValue],
        name: "Money",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix +
                "'$property' must be a number, not be less than $constraint1, not be greater than $constraint2 and have two max decimal places.", validationOptions),
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
exports.Money = Money;
