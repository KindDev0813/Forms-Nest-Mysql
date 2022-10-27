import type { ValidationOptions } from "class-validator";
/**
 * @name TextLengthFixed
 * @decorate
 * @description
 * Checks if the string's length is not less or more than given number.
 * Removes whitespace from both ends of a string.
 * If given value is not a string, then it returns false.
 * @summary ```import { TextLengthFixed } from "@nestjsi/class-validator/string/text-length-fixed";```
 * @param {number} fixedLength The minimum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
export declare function TextLengthFixed(fixedLength: number, validationOptions?: ValidationOptions): PropertyDecorator;
