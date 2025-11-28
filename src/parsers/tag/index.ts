import { ParserState } from '../../consts';
import { intoIterable, intoIterator } from '../into-iter';
import { type Test, type Parser } from '../types';

export function tag(patterns: Iterable<Test>): Parser<string, string> {
    return function* (source: Iterable<string>) {
        const word: string[] = [];

        let iter = intoIterator(source);
        let chunk = iter.next();

        for (const pattern of patterns) {
            if (chunk.done) {
                const expNewData = {
                    type: '_System',
                    value: ParserState.EXP_INPUT_DATA,
                } as const;

                const data = yield expNewData;
                iter = intoIterator(data);
                chunk = iter.next();
            }

            let char = chunk.value;

            switch (typeof pattern) {
                case 'string':
                    if (char !== pattern) {
                        // errorFn(char, pattern);
                    }
                    break;

                case 'function':
                    if (!pattern(char)) {
                        // errorFn(char, pattern);
                    }
                    break;

                default: { // regExp
                    if (!pattern.test(char)) {
                        // errorFn(char, pattern);
                    }
                    break;
                }
            }

            word.push(char);
        }

        const token = { type: 'TAG', value: word.join('')};

        return [token, intoIterable(iter)];
    }
}

tag('<div')('<di').next()