class Queue<T> {
    data: T[] = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.shift(); }
}

let numberQueue: Queue<number> = new Queue<number>();

numberQueue.data = [1, 2, 3];
numberQueue.push(4);

console.log(numberQueue.pop());