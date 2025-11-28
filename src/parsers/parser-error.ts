import {Test} from './types'

class ParserError extends Error {
    source: string;
    patterns: Test;

    constructor(message: string, obj: unknown) {
        super(message);
        // this.source = obj.source;
        // this.patterns = obj.patterns;
    }
}

export function createError(source, patterns, char, pattern) {
    throw new ParserError(
        `Символ ${char} не соответствует паттерну ${pattern}`,
        {source, patterns}
    );
}
