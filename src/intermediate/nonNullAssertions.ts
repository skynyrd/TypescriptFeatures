type BoringType = {
    a: number,
    b: number
}

let boringVar: BoringType;

function initializeTheBoringVar() {
    boringVar = {
        a: 1,
        b: 2
    }
}

initializeTheBoringVar();

// Below will raise an error as boringVar used before the initialization.
// console.log(boringVar.a);
// console.log(boringVar.b);

// We want compiler to trust us with !:
console.log('Believe me it is initalised', boringVar!.a, boringVar!.b);

type EmailCanBeMissing = {
    name: string,
    email?: string | null | undefined
}

function ensureEmailExists(ecbm: EmailCanBeMissing) {
    if (!ecbm.email) {
        throw new Error('Email is missing...')
    }
}

function sendEmail(email: string) {
    console.log('Sent!');
}

function ensureEmailExistsAndSendEmail(ecbm: EmailCanBeMissing) {
    ensureEmailExists(ecbm);
    // sendEmail(ecbm.email); // this will cause a compile time error
    sendEmail(ecbm.email!); // !: Trust me, I checked the email.
}