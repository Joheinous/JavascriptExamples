var payRate, hoursWorked, overtimeHours, grossPay, annualPay, taxRate, sOrJ, taxedGross;

sOrJ = "joint";
payRate= 25;
hoursWorked=40;

overtimeHours=0;

if (hoursWorked > 40) {

    overtimeHours=hoursWorked-40;
}

grossPay=(hoursWorked*payRate)+(.5*payRate*overtimeHours)

annualPay=grossPay*52

//single
if (sOrJ="single" && annualPay < 12000) {
    taxRate=.05;
}
else if (sOrJ="single" && annualPay <=24999.99){
    taxRate=.1;
}
else if (sOrJ="single" && annualPay <= 74999.99){
    taxRate=.15;
}
else if (sOrJ="single" && annualPay >=75000){
    taxRate=.2;
}


//joint
 if (sOrJ="joint" && annualPay < 12000) {
    taxRate=0;
    }
else if (sOrJ="joint" && annualPay <=24999.99){
    taxRate=.06;
    }
else if (sOrJ="joint" && annualPay <= 74999.99){
    taxRate=.11;
    }
else if (sOrJ="joint" && annualPay >=75000){
    taxRate=.2;
    }
else{
    taxRate=1;
}

taxedGross=grossPay-(grossPay*taxRate)

console.log("Your weekly gross pay after tax is $" + taxedGross + ". You are taxed at a rate of " + taxRate*100 + "%.");
console.log("Yearly, you make $" + annualPay + " before taxes.");