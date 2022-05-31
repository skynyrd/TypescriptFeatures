let theFirstArray: number[] = [1, 2, 3];

theFirstArray = [1];
theFirstArray = [1, 2, 3, 4, 5];

let theFirstTuple: [number, number] = [0, 0];

theFirstTuple = [1, 1];
theFirstTuple = [2, 2];

// theFirstTuple = [0]; // Error as it must be 2 items.

// Array class
const sameArrayButDifferent: Array<number> = [1, 2, 3];

// Set class
const iAmKeyedAndMyItemsAreUnique: Set<number> = new Set([1, 2, 3]);