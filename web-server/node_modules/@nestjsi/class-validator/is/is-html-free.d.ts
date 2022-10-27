import type { ValidationOptions } from "class-validator";
/**
 * @name IsHTMLFree
 * @decorate
 * @description Checks if the string has HTML tags.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function IsHTMLFree(validationOptions?: ValidationOptions): PropertyDecorator;
