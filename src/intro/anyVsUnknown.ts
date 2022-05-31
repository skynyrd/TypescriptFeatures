let iAmAny: any;
let iAmUnknown: unknown;

iAmAny = true;
iAmAny = "true";
iAmAny = 1;

iAmAny.and.you.can.call.anything.on.me();

iAmUnknown = true;
iAmUnknown = "true";
iAmUnknown = 1;

// iAmUnknown.but.not.flexible.as.any(); // ERROR

if (typeof iAmUnknown == 'string') {
    // It is string for the compiler now and it suggests string methods in autocomplete
    console.log(iAmUnknown.length);
}
if (typeof iAmUnknown == 'number') {
    // It is number for the compiler now and it suggests number methods in autocomplete
    console.log(iAmUnknown.toString());
}

// Unknown can be used when converting the legacy JS projects to TS.

function notSafeLogWithAny(value: any) {
    console.log(value.toFixed(2));
}

notSafeLogWithAny(123.456);
notSafeLogWithAny('This one will throw and error');

function saferLogWithUnknown(value: unknown) {
    if (typeof value == 'number') {
        console.log(value.toFixed(2));
    } else {
        console.log(value);
    }
}

// Casting unknown to a type:

let iKnowUAreString: unknown;

(iKnowUAreString as string).toLocaleLowerCase();