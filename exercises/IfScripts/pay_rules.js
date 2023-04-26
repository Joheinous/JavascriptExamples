var payRate, hoursWorked, overtimeHours, grossPay;

payRate= 25;
hoursWorked=40;

overtimeHours=0;

if (hoursWorked > 40) {

    overtimeHours=hoursWorked-40;
}

grossPay=(hoursWorked*payRate)+(.5*payRate*overtimeHours)

console.log(grossPay);