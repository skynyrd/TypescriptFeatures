type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    T extends null ? "null" :
    T extends never ? "never" :
    T extends unknown ? "unknown" :
    "object";

function typeName<T>(arg: T): TypeName<T> {
    if (arg === null) return 'null' as TypeName<T>;
    return typeof arg as TypeName<T>;
}

const bool = typeName(true);