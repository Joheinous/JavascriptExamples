function displayMailingLabel(name, address, city, state, zip){
let addressLabel = `
${name}
${address}
${city}
`;
console.log(addressLabel);
}

let firstName = "Jonas";
let homeAddress = "123 Street Road";
let homeCity = "Pittsburgh";
let homeState= "PA";

displayMailingLabel(firstName, homeAddress, homeCity, homeState);