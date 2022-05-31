type Persona = {
    nombre: string,
    edad: number
}

type PersonaDictionary = {
    [username: string]: Persona
}

const personas: PersonaDictionary = {
    'juan': {
        nombre: 'Juan',
        edad: 20
    },
}

personas['pedro'] = {
    nombre: 'Pedro',
    edad: 30
}

delete personas['juan']

const result = personas['missing']
console.log(result, result.nombre);  // undefined, Error

// if you want to get a warning for result.nombre, change the dictionary value from Persona to Persona | undefined.
