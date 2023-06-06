function maskify(cc) {
  let password = cc;
string1 = cc.slice(-4); //reduces input string to last 4 digits
string2 = string1.padStart(password.length, "#");
return string2;
}

console.log(maskify("123456789"));