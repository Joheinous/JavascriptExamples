function getSocSecTax(grossPay) {
    let afterTax = grossPay*0.062;
    console.log("Social Security taxes: $" + afterTax.toFixed(2));
};

function getMedicareTax(grossPay){
    let afterTax = grossPay*0.0145;
    console.log("Medicare Taxes: $" + afterTax.toFixed(2));
};

function getFederalTax(grossPay, withholdCode){
    if (withholdCode == 0) {
      let afterTax = grossPay*.23;
      console.log("Federal taxes: $" + afterTax.toFixed(2));
    }
    else if (withholdCode == 1) {
        let afterTax = grossPay*.21;
        console.log("Federal taxes: $" + afterTax.toFixed(2));
      }
    else if (withholdCode == 2) {
        let afterTax = grossPay*.195;
        console.log("Federal taxes: $" + afterTax.toFixed(2));
      }
    else if (withholdCode == 3) {
        let afterTax = grossPay*.185;
        console.log("Federal taxes: $" + afterTax.toFixed(2));
      }  
    else if (withholdCode == 4) {
        let afterTax = grossPay*.18;
        console.log("Federal taxes: $" + afterTax.toFixed(2));
    }
    else if (withholdCode >= 5) {
        let rate = .18-((withholdCode-4)*.005);
        let afterTax= grossPay*rate;
        console.log("Federal taxes: $" + afterTax.toFixed(2));
    }
    else {
        console.log("Invalid Withholding Code");
    }
};

let income = 45000;
let code = 1.5;

getSocSecTax(income);
getMedicareTax(income);
getFederalTax(income, code);