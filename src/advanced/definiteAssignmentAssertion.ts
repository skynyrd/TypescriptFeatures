class Point {
    x!: number;  // We have to use x! here as x and y are not definitely assigned in the constructor.
    y!: number;

    constructor() {
        this.moveRandom();
    }

    moveRandom() {
        this.x = Math.random() * 100;
        this.y = Math.random() * 100;
    }
}
