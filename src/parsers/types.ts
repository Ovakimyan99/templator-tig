import { ParserState } from "../consts";

interface ParserToken<T = unknown> {
    type: string;
    value?: T;
}

interface SystemToken extends ParserToken<ParserState> {
    type: '_System';
}

interface ParserValue<T = unknown> extends ParserToken<T> {

}

/**
 * Завершив парсинг, возвращаем токен и Iterable
 * для продолжаения итерации следующим парсером
 */
type ParserResult<T = unknown> = [ParserValue<T>, Iterable<string>];


/**
 * При вызове next передаем новые данные для парсинга.
 */
type ParserNext = Iterable<string>;

export type Parser<T = string, R = unknown> =
    (source: Iterable<T>) => Generator<SystemToken, ParserResult<R>, ParserNext>;


export type Test = string | RegExp | ((char: string) => boolean);
