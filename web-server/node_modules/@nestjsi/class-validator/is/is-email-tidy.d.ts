import ValidatorJS from "validator";
import type { ValidationOptions } from "class-validator";
/**
 * @name IsEmailTidy
 * @decorate
 * @description Checks if the string is an email. If given value is not a string, then it returns false.
 * @param {ValidatorJS.IsEmailOptions=} options Is EMail options: allow_ip_domain, allow_utf8_local_part, domain_specific_validation, ignore_max_length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
export declare function IsEmailTidy(options?: ValidatorJS.IsEmailOptions, validationOptions?: ValidationOptions): PropertyDecorator;
