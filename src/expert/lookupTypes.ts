// write a very long type definition
type Somebody = {
    name: string,
    age: number,
    isAlive: boolean,
    friends: string[],
    address: {
        street: string,
        city: string,
        state: string,
        zip: number
    }
}

type AddressOfSomebody = Somebody['address'];
