import { EXPECT_INPUT_DATA } from '../../consts';
import { intoIterable, intoIterator } from '../into-iter';
import { testPattern } from '../test-pattern';

import { type Parser } from '../types/parser';
import { type Test } from '../test-pattern';

export function tag(patterns: Iterable<Test>): Parser<string, string> {
    return function* (source: Iterable<string>) {
        const word: string[] = [];

        let iter = intoIterator(source);
        let chunk = iter.next();

        for (const pattern of patterns) {
            if (chunk.done) {
                const data = yield EXPECT_INPUT_DATA;
                iter = intoIterator(data);
                chunk = iter.next();
            }

            const isMatches = testPattern(pattern, source);

            if (!isMatches) {
                // errorFn(char, pattern);
            }

            word.push(chunk.value);
        }

        return [word.join(''), intoIterable(iter)];
    }
}
