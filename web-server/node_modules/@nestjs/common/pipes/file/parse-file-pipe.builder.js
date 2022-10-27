"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseFilePipeBuilder = void 0;
const file_type_validator_1 = require("./file-type.validator");
const max_file_size_validator_1 = require("./max-file-size.validator");
const parse_file_pipe_1 = require("./parse-file.pipe");
class ParseFilePipeBuilder {
    constructor() {
        this.validators = [];
    }
    addMaxSizeValidator(options) {
        this.validators.push(new max_file_size_validator_1.MaxFileSizeValidator(options));
        return this;
    }
    addFileTypeValidator(options) {
        this.validators.push(new file_type_validator_1.FileTypeValidator(options));
        return this;
    }
    build(additionalOptions) {
        const parseFilePipe = new parse_file_pipe_1.ParseFilePipe(Object.assign(Object.assign({}, additionalOptions), { validators: this.validators }));
        this.validators = [];
        return parseFilePipe;
    }
}
exports.ParseFilePipeBuilder = ParseFilePipeBuilder;
