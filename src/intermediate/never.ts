function alwaysThrowsException(message: string): never {
    throw new Error(message);
}

function neverReturnsAValue(): never {
    while (true) { }
}

type Square = { kind: 'square', size: number }
type Rectangle = { kind: 'rectangle', width: number, height: number }

type Shape = Square | Rectangle;

function area(s: Shape): number | undefined {
    if (s.kind === 'square') {
        return s.size * s.size;
    }
    if (s.kind === 'rectangle') {
        return s.height * s.width;
    }

    // if "Circle" is added to the Shape Union, below statement will fire a compile time error.
    const _ensureAllCasesAreHandled: never = s;
}