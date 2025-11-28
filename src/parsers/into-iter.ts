export function intoIterable<T = unknown>(v: Iterator<T>): Iterable<T> {
    return {
        [Symbol.iterator]() {
            return v;
        },
    }
}

export function intoIterator<T = unknown>(v: Iterable<T>): Iterator<T> {
    return v[Symbol.iterator]();
}