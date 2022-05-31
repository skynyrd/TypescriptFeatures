function getSum(a: number, b: number): number {
    return a + b;
}

getSum(1, 2);

type FunctionDoingSomethingWithNumbers = (a: number, b: number) => number;

let sumAlternative: FunctionDoingSomethingWithNumbers;

sumAlternative = function (a: number, b: number): number {
    return a + b;
}