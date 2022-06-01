const personResponse = {
    "name": "Dave",
    "email": "a@a.com",
    "firstName": "Dave",
    "lastName": "Smith",
};

type PersonResponse = typeof personResponse;

function processResponse(response: PersonResponse) {
    console.log(response.name);
}
