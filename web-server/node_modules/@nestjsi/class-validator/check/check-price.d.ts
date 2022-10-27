import type { ValidationOptions } from "class-validator";
export declare const PRICE_MAX: number;
/**
 * @name CheckPrice
 * @decorate
 * @description Checks if a value is in a range of values with two decimal places.
 * @summary ```import { CheckPrice } from "@nestjsi/class-validator/check/check-price";```
 * @param {number=} [maxValue=562949953421311] The maximum value
 * @param {number=} [minValue=0.01] The minimum value
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.2.1
 */
export declare function CheckPrice(maxValue?: number, minValue?: number, validationOptions?: ValidationOptions): PropertyDecorator;
