import { tag } from '../parsers';

const parserPunctuation = or(
    tag('{'),
    tag('}'),
    tag('<'),
    tag('>'),
    tag('/'),
    tag(':'),
    tag('"'),
    tag('`'),
    tag('\''),
);

const parserInterpolationStart = tag('{{');
const parserInterpolationEnd = tag('}}');

// ...  &  /* ... */
const parserCommentLine = take(['//', /\w|\t/, /\n/]);
const parserCommentBlock = take([/\/\*(\s|\w)*\*\//]);


const parserIdentifier = or(
    tag('setup'),
    tag('template'),
);

const parserNumberLiteral = tag([/\d/]);
const parserStringLiteral = tag([/\w/]);

const parseIfDirective = tag(['if="const', /\w|\s/, 'of', /\w|\s/, '"']);
const parserForDirective = tag(['for="const', /\w|\s/, 'of', /\w|\s/, '"'])

const parseSlot = tag('slot');

const parseAttributes = or(
    tag('class'),
    tag('name'),
    tag('id'),
    take(['data-', /\w/]),
);

export {
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
};

// const parse = tokenCreator('Punctuation', parserPunctuation);
// parse('source').next('source-path2');

