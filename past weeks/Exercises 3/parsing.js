let userName = "Jack Ingof"


function parseAndDisplayName(fullName){
console.log("Name: " + fullName);
let spacePos = fullName.indexOf(" ");
let firstName = fullName.substring(0, spacePos);
let lastName = fullName.substring(spacePos + 1);

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
}

parseAndDisplayName(userName);