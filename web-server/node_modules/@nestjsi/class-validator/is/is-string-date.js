"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsStringDate = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IsStringDate
 * @decorate
 * @description Is string in 'YYYY-MM-DD' format.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
function IsStringDate(validationOptions) {
    return function ClassValidatorCustomIsStringDate(object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            constraints: [],
            name: "IsStringDate",
            options: {
                message: "Date should be in [YYYY-MM-DD] format",
                ...validationOptions,
            },
            propertyName,
            target: object.constructor,
            validator: {
                validate(value) {
                    return typeof value === "string" && /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/i.test(value);
                },
            },
        });
    };
}
exports.IsStringDate = IsStringDate;
