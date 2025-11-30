export const enum ParserState {
    EXP_INPUT_DATA = 0,
    DONE = 2,
}

export interface Token<V = unknown> {
    type: string;
    value?: V;
}

export interface SystemToken extends Token<ParserState> {
    type: '_System';
}
