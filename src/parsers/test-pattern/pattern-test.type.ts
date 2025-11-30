export type TestString = string;
export type TestRegexp = RegExp;
export type TestCallback = (char: Iterable<string>) => boolean;

export type Test = TestString | TestRegexp | TestCallback;
