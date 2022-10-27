"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsEmailTidy = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IsEmailTidy
 * @decorate
 * @description Checks if the string is an email. If given value is not a string, then it returns false.
 * @param {ValidatorJS.IsEmailOptions=} options Is EMail options: allow_ip_domain, allow_utf8_local_part, domain_specific_validation, ignore_max_length
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
function IsEmailTidy(options, validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [],
        name: "IsEmailTidy",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix + "$property must be an email", validationOptions),
            validate: (value) => (0, class_validator_1.isEmail)(value, {
                allow_ip_domain: false,
                allow_utf8_local_part: false,
                domain_specific_validation: true,
                ignore_max_length: false,
            }),
        },
    }, validationOptions);
}
exports.IsEmailTidy = IsEmailTidy;
