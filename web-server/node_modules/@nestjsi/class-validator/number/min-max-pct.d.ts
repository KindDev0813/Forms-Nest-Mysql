import type { ValidationOptions } from "class-validator";
/**
 * @name MinMaxPct
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function MinMaxPct(minValue: number, maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator;
