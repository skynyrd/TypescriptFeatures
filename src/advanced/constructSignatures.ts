type MandatedCtor = {
    new(s: string): {};
};

// below const has to have a constructor, otherwise a compiler error would kick in.
const variableHasCtor: MandatedCtor = class {
    constructor(public s: string) {}
}