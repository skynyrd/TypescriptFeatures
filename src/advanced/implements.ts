type Animall = {
    name: string,
    voice(): string
}

class Cat implements Animall {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    voice() {
        return 'meow';
    }
}

class Dog implements Animall {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    voice() {
        return 'woof';
    }
}
