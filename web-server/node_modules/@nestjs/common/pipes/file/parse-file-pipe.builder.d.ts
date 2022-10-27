import { FileTypeValidatorOptions } from './file-type.validator';
import { MaxFileSizeValidatorOptions } from './max-file-size.validator';
import { ParseFileOptions } from './parse-file-options.interface';
import { ParseFilePipe } from './parse-file.pipe';
export declare class ParseFilePipeBuilder {
    private validators;
    addMaxSizeValidator(options: MaxFileSizeValidatorOptions): this;
    addFileTypeValidator(options: FileTypeValidatorOptions): this;
    build(additionalOptions?: Omit<ParseFileOptions, 'validators'>): ParseFilePipe;
}
