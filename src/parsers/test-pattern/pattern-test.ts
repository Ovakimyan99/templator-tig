import { Test, TestCallback, TestRegexp } from './pattern-test.type';

function testString(pattern: string, source: Iterable<string>) {
    const iter = pattern[Symbol.iterator]();
    for (const char of source) {
        if (iter.next().value !== char) return false;
    }

    return Boolean(iter.next().done);
}

function testRegexp(re: TestRegexp, source: Iterable<string>) {
    return re.test([...source].join(''));
}

function testCallback(callback: TestCallback, source: Iterable<string>) {
    return callback(source);
}

export function testPattern(pattern: Test, source: Iterable<string>): boolean {
    switch (typeof pattern) {
        case 'string':
            return testString(pattern, source);
        case 'function':
            return testCallback(pattern, source);
        default: {
            if (pattern instanceof RegExp) {
                return testRegexp(pattern, source);
            }

            throw new Error('Переданный тест не соответствует ни одному из паттернов лексера')
        }
    }
}