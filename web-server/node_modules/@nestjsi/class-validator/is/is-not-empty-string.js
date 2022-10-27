"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotEmptyString = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IsNotEmptyString
 * @decorate
 * @description Checks if there is at least one character in the string. Considers the line is not empty even if it has trimmable characters. If the given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
function IsNotEmptyString(validationOptions) {
    return function IsNotEmptyStringDecorator(target, propertyKey) {
        (0, class_validator_1.registerDecorator)({
            async: false,
            constraints: [],
            name: "IsNotEmptyString",
            options: validationOptions,
            propertyName: propertyKey,
            target: target.constructor,
            validator: {
                defaultMessage: (validationArguments) => {
                    return `[${validationArguments.property}] should not be an empty string`;
                },
                validate: (value) => {
                    return (0, class_validator_1.isString)(value) && (0, class_validator_1.isNotEmpty)(value);
                },
            },
        });
    };
}
exports.IsNotEmptyString = IsNotEmptyString;
