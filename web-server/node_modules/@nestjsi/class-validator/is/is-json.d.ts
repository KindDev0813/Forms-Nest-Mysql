import type { ValidationOptions } from "class-validator";
/**
 * @name IsJSON
 * @decorate
 * @description Checks value to the possibility to be valid JSON.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators.
 * @returns {PropertyDecorator}
 * @since 0.2.2
 */
export declare function IsJSON(validationOptions?: ValidationOptions): PropertyDecorator;
