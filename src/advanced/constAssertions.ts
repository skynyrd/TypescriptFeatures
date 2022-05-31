const dave = {
    name: 'Dave',
    instrument: 'Drums',
    brands: ['Yamaha', 'Pearl']
}

dave.brands = ['Pearl', 'Yamaha', 'Roland']; // allowed

const alexi = {
    name: 'Alexi',
    instrument: 'Guitar',
    brands: ['ESP']
} as const

// alexi.brands = ['Fender', 'ESP']; not allowed, would Alexi play with Fender? 
