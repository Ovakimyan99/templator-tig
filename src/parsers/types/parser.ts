import { SystemToken } from "../../type";

/**
 * Завершив парсинг, возвращаем слово и Iterable
 * для продолжаения итерации следующим парсером
 */
type ParserResult<T = unknown> = [T, Iterable<string>];

/**
 * Для поточного парсера
 */
type ParserNext = Iterable<string>;

export type Parser<Source = string, Result = unknown> =
    (source: Iterable<Source>) => Generator<SystemToken, ParserResult<Result>, ParserNext>;
