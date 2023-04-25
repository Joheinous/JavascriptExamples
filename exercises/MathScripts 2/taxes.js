var salary, taxRate, withhold;

salary = 45000;
taxRate=.23;

withhold = salary*taxRate;

console.log("At a tax rate of " + taxRate*100 + "% and a salary of $" + salary + " the government would be taking $" +withhold.toFixed(2));