import type { ValidationOptions } from "class-validator";
/**
 * @name TextLengthMinMax
 * @decorate
 * @description
 * Checks if the string's length is not more and less than given numbers.
 * If given value is not a string, then it returns false.
 * Note: this function takes into account surrogate pairs.
 * @summary ```import { TextLengthMinMax } from "@nestjsi/class-validator/string/text-length-min-max";```
 * @param {number} minLen The minimum length
 * @param {number} maxLen The maximum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
export declare function TextLengthMinMax(minLen: number, maxLen: number, validationOptions?: ValidationOptions): PropertyDecorator;
