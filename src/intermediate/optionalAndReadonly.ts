// Optional

type Someone = {
    name: string,
    email: string,
    phoneNumber?: string // Optional Value
}

function multiply(a: number, b: number, c?: number): number {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

// Readonly

class Pet {
    constructor(public readonly name: string) { }
}

const dog = new Pet('Avav');
console.log(dog.name);
// dog.name = "dogo"; // Won't allow as it is a readonly property