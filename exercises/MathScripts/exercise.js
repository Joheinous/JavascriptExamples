// sample inputs
var foodCost = 79.25;
var tax = foodCost*.07;
var tip = 12;

//calculations
var totalDue = foodCost + tax + tip;

//output
console.log("Subtotal is $" + foodCost + ".");
console.log("Tax is $" + tax.toFixed(2) + ".");
console.log("Tip is $" + tip + ".");
console.log("The total due is $" + totalDue + ".");
