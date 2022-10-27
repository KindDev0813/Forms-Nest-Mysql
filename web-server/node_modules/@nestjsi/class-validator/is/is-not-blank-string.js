"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotBlankString = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IsNotBlankString
 * @decorate
 * @description Checks if there is at least one character in the string. Removes whitespace from both ends of a string. If the given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
function IsNotBlankString(validationOptions) {
    return function IsNotBlankStringDecorator(target, propertyKey) {
        (0, class_validator_1.registerDecorator)({
            async: false,
            constraints: [],
            name: "IsNotBlankString",
            options: validationOptions,
            propertyName: propertyKey,
            target: target.constructor,
            validator: {
                defaultMessage: (validationArguments) => {
                    return `[${validationArguments.property}] should not be a blank string`;
                },
                validate: (value) => {
                    return (0, class_validator_1.isString)(value) && (0, class_validator_1.isNotEmpty)(value.trim());
                },
            },
        });
    };
}
exports.IsNotBlankString = IsNotBlankString;
