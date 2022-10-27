"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamableFile = void 0;
const stream_1 = require("stream");
class StreamableFile {
    constructor(bufferOrReadStream, options = {}) {
        this.options = options;
        if (Buffer.isBuffer(bufferOrReadStream)) {
            this.stream = new stream_1.Readable();
            this.stream.push(bufferOrReadStream);
            this.stream.push(null);
        }
        else if (bufferOrReadStream.pipe &&
            typeof bufferOrReadStream.pipe === 'function') {
            this.stream = bufferOrReadStream;
        }
    }
    getStream() {
        return this.stream;
    }
    getHeaders() {
        const { type = 'application/octet-stream', disposition = null } = this.options;
        return { type, disposition };
    }
}
exports.StreamableFile = StreamableFile;
