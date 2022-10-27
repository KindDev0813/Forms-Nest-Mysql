"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNotNull = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IsNotNull
 * @decorate
 * @description Checks if given value is not null.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
function IsNotNull(validationOptions) {
    return function IsNotNullDecorator(target, propertyKey) {
        (0, class_validator_1.registerDecorator)({
            async: false,
            constraints: [],
            name: "IsNotNull",
            options: validationOptions,
            propertyName: propertyKey,
            target: target.constructor,
            validator: {
                defaultMessage: (validationArguments) => {
                    return `[${validationArguments.property}] should not be null`;
                },
                validate: (value) => {
                    return (0, class_validator_1.isString)(value) && (0, class_validator_1.isNotEmpty)(value);
                },
            },
        });
    };
}
exports.IsNotNull = IsNotNull;
