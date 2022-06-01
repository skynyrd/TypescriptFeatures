type Triangle = {
    a: number,
    h: number
}

type Trapezoid = {
    a: number,
    b: number,
    h: number
}

type TriangleOrTrapezoid = Triangle | Trapezoid;

function isTrapezoid(shape: TriangleOrTrapezoid): shape is Trapezoid {
    return 'b' in shape;
}

function area(shape: TriangleOrTrapezoid): number {
    if(isTrapezoid(shape)) {
        return ((shape.a + shape.b) / 2) * shape.h;
    }

    return (shape.a * shape.h) / 2;
}
