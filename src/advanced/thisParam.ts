function double(this: {value: number}) {
    return this.value * 2;
}

const valid = {value: 2, double};
valid.double();

console.log(valid.double()); // 4

const invalid = { valve: 3, double};
// invalid.double(); // Compile Error