function mutatedSortAndReverse(input: number[]): number[] {
    return input.sort().reverse();
}

const beforeMutatingFunction = [1, 2, 3, 4, 5];
const afterMutatingFunction = mutatedSortAndReverse(beforeMutatingFunction);

console.log(beforeMutatingFunction); // [5,4,3,2,1];
console.log(afterMutatingFunction); // [5,4,3,2,1];

function immutatedSortAndReverse(input: readonly number[]): number[] {
    // return input.sort().reverse(); // Compile Error
    return input.slice().sort().reverse();
}

const beforeImmutatingFunction = [1, 2, 3, 4, 5];
const afterImmutatingFunction = immutatedSortAndReverse(beforeImmutatingFunction);

console.log(beforeImmutatingFunction); // [1,2,3,4,5]
console.log(afterImmutatingFunction); // [5,4,3,2,1]

type ReadonlyNumberArray = readonly number[];
type ReadonlyNumberArrayAlternate = ReadonlyArray<number>;
