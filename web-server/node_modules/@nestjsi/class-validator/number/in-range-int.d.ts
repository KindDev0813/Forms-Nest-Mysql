import type { ValidationOptions } from "class-validator";
/**
 * @name InRangeInt
 * @decorate
 * @description Checks if a value is in a range of integer values.
 * @param {number} minValue The minimum value
 * @param {number} maxValue The maximum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.5
 */
export declare function InRangeInt(minValue: number, maxValue: number, validationOptions?: ValidationOptions): PropertyDecorator;
