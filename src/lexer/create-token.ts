import { EXPECT_INPUT_DATA } from "../consts";
import { intoIterable, intoIterator } from "../parsers/into-iter";
import { type Parser } from "../parsers/types/parser";
import { Token } from "../type";

export function createToken(name: string, parser: Parser<string, string>): Parser<typeof name, Token<string, typeof name>> {
    return function* (source: Iterable<string>) {
        const p = parser(source);
        let iter = p.next();

        while (!iter.done) {
            iter = p.next(yield EXPECT_INPUT_DATA);
        }

        return [
            {
                type: name,
                value: iter.value,
            },
            p.next().value,
        ];
    }
}