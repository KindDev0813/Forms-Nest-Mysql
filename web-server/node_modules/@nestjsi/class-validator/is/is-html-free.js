"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsHTMLFree = void 0;
const class_validator_1 = require("class-validator");
/**
 * @name IsHTMLFree
 * @decorate
 * @description Checks if the string has HTML tags.
 * @param {ValidationOptions=} validationOptions Options used to pass to validation decorators
 * @returns {PropertyDecorator}
 */
function IsHTMLFree(validationOptions) {
    return (0, class_validator_1.ValidateBy)({
        constraints: [],
        name: "IsHTMLFree",
        validator: {
            defaultMessage: (0, class_validator_1.buildMessage)((eachPrefix) => eachPrefix + "$property must be a string without HTML tags", validationOptions),
            validate(value) {
                if (!(0, class_validator_1.isString)(value)) {
                    return false;
                }
                return /(<([^>]+)>)/g.test(value);
            },
        },
    }, validationOptions);
}
exports.IsHTMLFree = IsHTMLFree;
