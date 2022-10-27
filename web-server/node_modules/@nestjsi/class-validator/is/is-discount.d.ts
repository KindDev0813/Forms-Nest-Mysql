import type { ValidationOptions } from "class-validator";
/**
 * @name IsDiscount
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function IsDiscount(validationOptions?: ValidationOptions): PropertyDecorator;
