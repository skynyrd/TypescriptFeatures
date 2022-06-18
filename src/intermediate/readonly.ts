function makeReadonly<T>(object: T): Readonly<T> {
    return Object.freeze({ ...object });
}

const editable = { x: 0, y: 0 };
editable.x = 2;

const noneditable = makeReadonly(editable);
// noneditable.x = 23; ERROR
