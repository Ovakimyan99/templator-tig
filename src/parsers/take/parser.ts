import { Parser } from "../types/parser";
import { Test } from "../test-pattern";

export function take(pattern: Iterable<Test>): Parser<string, string> {
    return function* (source) {
        let iter = source[Symbol.iterator]();

        for (const test of pattern) {
            while ()
        }
        yield '';
        return ''
    }
}