/// <reference types="node" />
import { Readable } from 'stream';
import { StreamableFileOptions } from './streamable-options.interface';
export interface StreamableHandlerResponse {
    destroyed: boolean;
    statusCode: number;
    send: (msg: string) => void;
}
export declare class StreamableFile {
    readonly options: StreamableFileOptions;
    private readonly stream;
    protected handleError: (err: Error, response: StreamableHandlerResponse) => void;
    constructor(buffer: Uint8Array, options?: StreamableFileOptions);
    constructor(readable: Readable, options?: StreamableFileOptions);
    getStream(): Readable;
    getHeaders(): {
        type: string;
        disposition: string;
        length: number;
    };
    get errorHandler(): (err: Error, response: StreamableHandlerResponse) => void;
    setErrorHandler(handler: (err: Error, response: StreamableHandlerResponse) => void): this;
}
