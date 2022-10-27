import type { ValidationOptions } from "class-validator";
/**
 * @name IntMinMax
 * @decorate
 * @description Checks is value between two integers inclusive.
 * @summary ```import { IntMinMax } from "@nestjsi/class-validator/number/int-min-max";```
 * @param {number} minimumInteger Minimum allowed integer
 * @param {number} maximumInteger Maximum allowed integer
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
export declare function IntMinMax(minimumInteger: number, maximumInteger: number, validationOptions?: ValidationOptions): PropertyDecorator;
