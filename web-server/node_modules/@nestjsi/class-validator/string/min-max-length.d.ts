import type { ValidationOptions } from "class-validator";
/**
 * @name MinMaxLength
 * @decorate
 * @description Checks if the string's length is not more and less than given numbers. If given value is not a string, then it returns false. Note: this function takes into account surrogate pairs.
 * @param {number} minLen The minimum length
 * @param {number} maxLen The maximum length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @deprecated Since 0.2.1. Use `@TextLengthMinMax` instead.
 */
export declare function MinMaxLength(minLen: number, maxLen: number, validationOptions?: ValidationOptions): PropertyDecorator;
