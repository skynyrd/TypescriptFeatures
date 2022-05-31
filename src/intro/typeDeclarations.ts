// You can move this line to x.d.ts file
// Better approach is to use community driven DefinitelyTyped project
// To install node definitions (just an example) ==> npm i @types/node
declare const point3D: { x: number, y:number, z:number}

console.log(`Z dimension of the point3D is ${point3D.z}`);

