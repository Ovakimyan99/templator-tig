import { Parser } from "../parsers";
import { Token } from "../type";

type LexerType =
    | 'Identifier'
    | 'StringLiteral'
    | 'NumberLiteral'
    | 'Punctuation'
    | 'InterpolationStart'
    | 'InterpolationEnd'
    | 'CommentLine'
    | 'CommentBlock'
    | 'Text';

interface LexerToken<T = unknown> extends Token<T> {
    type: LexerType;
};

type TokenParser = Parser<string, LexerToken>;