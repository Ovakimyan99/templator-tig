import { EXPECT_INPUT_DATA } from "../consts";
import { type Parser } from "../parsers/types/parser";

export function createToken(name: string, parser: Parser<string, string>): Parser<typeof name, string> {
    return function* (source: Iterable<string>) {
        const p = parser(source);
        let iter = p.next();

        while (!iter.done) {
            iter = p.next(yield EXPECT_INPUT_DATA);

        }

        return iter.value;
    }
}