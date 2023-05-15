let label = {
names: "Jeff Jefferson",
address: "123 Street Road",
city: "VillageTown",
state: "Oklahoma",
zip: "15151"
};

function printContact(){
console.log(label.names);
console.log(label.address);
console.log(label.city + ", " + label.state + " " + label.zip);
}

printContact(label);