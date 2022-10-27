import type { ValidationOptions } from "class-validator";
export declare const IS_POSITIVE_INT = "isPositiveInt";
/**
 * @name IsPositiveInt
 * @decorate
 * @description Checks is value positive integer.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function IsPositiveInt(validationOptions?: ValidationOptions): PropertyDecorator;
