// Interfaces are very similar to Types.
// Extend is same as & used in Types
// Interfaces can be easier to understand for the .NET/Java engineers.

// Type Advantage: Unions, Intersections, Literal Types, Primitives, Shorthand and advanced type functions
// Interfaces Advantage: Declaration Merging and extend keyword for some devs

interface Point2D {
    x: number,
    y: number
}

interface Point3D extends Point2D {
    z: number
}

const point: Point3D = {
    x: 1,
    y: 2,
    z: 3
}

// Other use case for the interfaces is "Declaration Merging"

interface Request {
    body: string;
}

interface Request {
    json: any;
}

function handleRequest(req: Request) {
    console.log(req.body);
    console.log(req.json);
}
