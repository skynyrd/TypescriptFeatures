const james = {
    name: 'James',
    age: 55
}

function logSet<T, Key extends keyof T>(obj: T, key: Key, value: T[Key]) {
    obj[key] = value;
    console.log(value);
}

logSet(james, 'age', 56);