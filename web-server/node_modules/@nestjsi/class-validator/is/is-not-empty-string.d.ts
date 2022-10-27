import type { ValidationOptions } from "class-validator";
/**
 * @name IsNotEmptyString
 * @decorate
 * @description Checks if there is at least one character in the string. Considers the line is not empty even if it has trimmable characters. If the given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export declare function IsNotEmptyString(validationOptions?: ValidationOptions): PropertyDecorator;
