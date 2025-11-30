import { createToken } from './create-token';
import {
    parserInterpolationStart,
    parserInterpolationEnd,

    parserNumberLiteral,
    parserStringLiteral,

    parserCommentLine,
    parserCommentBlock,

    parseIfDirective,
    parserForDirective,

    parseSlot,

    parseAttributes,

    parserPunctuation,
    parserIdentifier,
} from './parsers-by-lexer';

const lexPunctuation = createToken('Punctuation', parserPunctuation);
const lexIdentifier = createToken('Identifier', parserIdentifier);

const lexStringLiteral = createToken('StringLiteral', parserStringLiteral);
const lexNumberLiteral = createToken('NumberLiteral', parserNumberLiteral);

const lexInterpolationStart = createToken('InterpolationStart', parserInterpolationStart);
const lexInterpolationEnd = createToken('InterpolationEnd', parserInterpolationEnd);

const lexCommentLine = createToken('CommentLine', parserCommentLine);
const lexCommentBlock = createToken('CommentBlock', parserCommentBlock);

const lexIfDirective = createToken('IfDirectiveNode', parseIfDirective);
const lexForDirective = createToken('ForDirectiveNode', parserForDirective);

const lexSlot = createToken('Slot', parseSlot);

const lexAttributes = createToken('Attributes', parseAttributes);

const lexer = or(
    lexPunctuation,
    lexIdentifier,

    lexNumberLiteral,

    lexInterpolationStart,
    lexInterpolationEnd,

    lexIfDirective,
    lexForDirective,

    lexSlot,

    lexAttributes,

    lexCommentLine,
    lexCommentBlock,

    lexStringLiteral,
)

export const lexerAll = take(lexer, {min: 0});