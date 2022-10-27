import type { ValidationOptions } from "class-validator";
/**
 * @name IsUUID4
 * @decorate
 * @description Checks if the string is a UUID version 4. If given value is not a string, then it returns false.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function IsUUID4(validationOptions?: ValidationOptions): PropertyDecorator;
