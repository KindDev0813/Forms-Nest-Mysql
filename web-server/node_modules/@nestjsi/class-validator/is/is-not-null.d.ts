import type { ValidationOptions } from "class-validator";
/**
 * @name IsNotNull
 * @decorate
 * @description Checks if given value is not null.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 * @since 0.1.3
 */
export declare function IsNotNull(validationOptions?: ValidationOptions): PropertyDecorator;
