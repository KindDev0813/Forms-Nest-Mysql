import type { ValidationOptions } from "class-validator";
/**
 * @name MinMax
 * @decorate
 * @description Checks if a value is in a range of values.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function MinMax(minValue: number, maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator;
