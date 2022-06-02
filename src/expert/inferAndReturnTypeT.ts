type IsArray<T> =
    T extends Array<T>
    ? 'array'
    : 'other';

type WithArray = IsArray<string[]>;
type WithNotArray = IsArray<number>;

type UnBoxArray<T> =
    T extends Array<infer Member>
    ? Member
    : T;

type UnBoxedStringArray = UnBoxArray<string[]>;     // hover the mouse on the type and you can see that compiler inferred the member as string
type UnboxedNumberArray = UnBoxArray<number[]>;     // hover the mouse on the type and you can see that compiler inferred the member as number
type AnythingElse = UnBoxArray<string>;

// Practical Use Case

export function addFullName(firstName: string, lastName: string) {
    return {
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`
    }
}

type ReturnType<T> =
    T extends (...args: any) => infer R
    ? R
    : never;

type Person = ReturnType<typeof addFullName>;

function logPerson(person: Person) {
    console.log(person.fullName);
    return person;
}

// ReturnType<T> is a default Typescript method, so it can be used straightaway.

function testReturnType() {
    return {
        x: 1
    }
}

function logTestReturnType(test: ReturnType<typeof testReturnType>) {
    console.log(test.x);
}
