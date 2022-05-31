type BassGuitar = {
    id: 'bass',
    kind: 'Plucked String',
}

type ElectricGuitar = {
    id: 'electricGuitar',
    kind: 'Plucked String'
}

type Drums = {
    id: 'drums',
    kind: 'Percussion'
}

type Instrument = BassGuitar | ElectricGuitar | Drums;

function play(instrument: Instrument) {
    if (instrument.id === 'bass') {
        // Compiler autocompletes for BassGuitar
    }
    if (instrument.id === 'electricGuitar') {
        // ...
    }
    if (instrument.id === 'drums') {
        // ...
    }
}