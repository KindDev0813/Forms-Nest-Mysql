import type { ValidationOptions } from "class-validator";
/**
 * @name IsNotBlankString
 * @decorate
 * @description Checks if there is at least one character in the string. Removes whitespace from both ends of a string. If the given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export declare function IsNotBlankString(validationOptions?: ValidationOptions): PropertyDecorator;
