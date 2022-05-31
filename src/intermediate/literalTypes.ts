let north: 'North'; // 'North' is a literal type here. It is not a value, it's a type.
north = 'North';
// north = 'Something else' // ERROR: Something else is not 'North'

type CardinalDirection = 'North' | 'East' | 'South' | 'West';

let direction: CardinalDirection;

direction = 'North';
direction = 'East';
direction = 'West';

type HeadsOrTails = 'Head' | 'Tail';

function flipCoin(): HeadsOrTails {
    if (Math.floor(Math.random() * 2) == 0) {
        return 'Tail';
    }

    return 'Head';
}

// if(flipCoin() === 'SomethingElse') {
//     // Compile Error
// }