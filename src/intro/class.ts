class Animal {
    protected name;

    constructor(name: string) {
        this.name = name;
    }

    public move(distance: number) {
        console.log(`${this.name} moved ${distance}m`);
    }
}

let cat = new Animal('Cat');
cat.move(10);

class Bird extends Animal {
    fly(distance: number) {
        console.log(`${this.name} flew ${distance}m`);
    }
}
