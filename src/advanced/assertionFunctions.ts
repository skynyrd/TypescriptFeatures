type Person = {
    name: string,
    dateOfBirth?: Date
}

function assert(condition: unknown, message: string): asserts condition {
    if(!condition) {
        throw new Error(message);
    }
}

function assertDate(value:unknown) : asserts value is Date {
    if(!(value instanceof Date)) {
        throw new Error(`Expected date, got ${value}`);
    }
}

const maybePerson: Person = {
    name: 'John',
}

assert(maybePerson != null, 'Person is null');
console.log('Name: ', maybePerson.name);

assertDate(maybePerson.dateOfBirth);
console.log('Date of birth: ', maybePerson.dateOfBirth.toISOString());
