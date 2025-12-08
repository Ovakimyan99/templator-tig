import { Test, TestCallback, TestRegexp } from './pattern-test.type';

function testString(pattern: string, source: string) {
    return pattern === source;
}

function testRegexp(re: TestRegexp, source: string) {
    return re.test(source);
}

function testCallback(callback: TestCallback, source: string) {
    return callback(source);
}

export function testPattern(pattern: Test, source: string): boolean {
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