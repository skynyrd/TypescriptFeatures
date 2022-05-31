class Counter {
    constructor(private _startNumber: number) { }

    increment(): number {
        this._startNumber++;
        return this._startNumber;
    }

    incrementArrow = () => {
        this._startNumber++;
        return this._startNumber;
    }
}

const counter = new Counter(0);
console.log(counter.increment()); // 1

const counter2 = new Counter(0);
const inc = counter2.increment;
inc(); // ERROR: Increment called directly and _startNumber is not in the scope.

const counter3 = new Counter(0);
const incArrow = counter3.incrementArrow;
incArrow(); // Arrow functions can read "this" from the surrounding content, so it prints 1