type TwoDPoint = { x: number, y: number }
type ThreeDPoint = TwoDPoint & { z: number }

const ex3DPoint: ThreeDPoint = {
    x: 1,
    y: 2,
    z: 3
}

type HomeNumber = {
    streetName: string,
    number: number
}

type TypeA = {
    name: string
}

type TypeB = {
    email: string
}

type TypeC = {
    phone: string
}

type TypeIntersection = TypeA & TypeB & TypeC;

function logTypeIntersection(param: TypeIntersection) {
    console.log(`${param.email} ${param.name} ${param.phone}`);
}