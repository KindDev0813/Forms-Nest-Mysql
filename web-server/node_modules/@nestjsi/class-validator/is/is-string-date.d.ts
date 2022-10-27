import type { ValidationOptions } from "class-validator";
/**
 * @name IsStringDate
 * @decorate
 * @description Is string in 'YYYY-MM-DD' format.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function IsStringDate(validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
