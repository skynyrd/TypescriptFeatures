class BassSolo {
    flap() {
        console.log('bawm ba ba bawm bam')
    }

    tap() {
        console.log('duh duh duru duru duh duh')
    }
}

class DrumSolo {
    cymbals() {
        console.log('tsssss ts tss ts tssss')
    }

    twinPedals() {
        console.log('badabadabadabadabadabada')
    }

    snareGhosts() {
        console.log('phrrrrrrrrrrrr tak tak prrrrtak')
    }
}

type Solo = DrumSolo | BassSolo;

function spotlightOn(solo: Solo) {
    if (solo instanceof BassSolo) {
        solo.flap(); // Autocomplete works as compiler understands it's a bass solo
        solo.tap();
        solo.tap();
        solo.flap();
    }
    if (solo instanceof DrumSolo) {
        solo.snareGhosts();  // Autocomplete works as compiler understands it's a drum solo
        solo.cymbals();
        solo.twinPedals();
        solo.snareGhosts();
        solo.cymbals();
    }
}