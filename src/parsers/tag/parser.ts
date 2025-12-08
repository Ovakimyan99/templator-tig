import { EXPECT_INPUT_DATA } from '../../consts';
import { intoIterable, intoIterator } from '../into-iter';
import { testPattern } from '../test-pattern';

import { type Parser } from '../types/parser';
import { type Test } from '../test-pattern';

export function tag(patterns: Iterable<Test>): Parser<string, string> {
    return function* (source) {
        const word: string[] = [];

        let iter = intoIterator(source);

        for (const pattern of patterns) {
            let { done, value: char } = iter.next();
            if (done) {
                const data = yield EXPECT_INPUT_DATA;
                iter = intoIterator(data);
                char = iter.next().value;
            }

            const ok = testPattern(pattern, char);

            if (!ok) {
                // errorFn(char, pattern);
            }

            word.push(char);
        }

        return [word.join(''), intoIterable(iter)];
    }
}
