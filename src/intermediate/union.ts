type Padding = number | string;

function padLeft(value: string, padding: Padding) {
    if (typeof padding === 'number') {
        // padding is recognised as number by the compiler
    }
    if (typeof padding === 'string') {
        // padding is recognised as number by the compiler
    }
}