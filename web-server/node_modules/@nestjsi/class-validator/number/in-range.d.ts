import type { ValidationOptions } from "class-validator";
/**
 * @name InRange
 * @decorate
 * @description Checks if a value is in a range of values.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {number=} maxDecimalPlaces Max decimal places
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function InRange(minValue: number, maxValue: number, maxDecimalPlaces?: number, validationOptions?: ValidationOptions): PropertyDecorator;
