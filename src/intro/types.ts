type Currency = { amount: number, type: string };

const hundredDollars: Currency = {
    amount: 100,
    type: "AUD"
}

let point2D: { x: number, y: number } = {
    x: 0,
    y: 0
}

type AAndB = { a: number, b: number }
type AAndBAndC = { a: number, b: number, c: number }

let aAndB: AAndB = { a: 1, b: 2 };
let aAndBAndC: AAndBAndC = { a: 1, b: 2, c: 3 };

aAndB = aAndBAndC; // Extra info is ok
// aAndBAndC = aAndB; // COMPILE ERROR

function takesAandB(anb: AAndB) {
    // pass
}

function takesAandBandC(anbnc: AAndBAndC) {
    // pass
}

takesAandB(aAndBAndC); // OK
// takesAandBandC(aAndB); // COMPILE ERROR