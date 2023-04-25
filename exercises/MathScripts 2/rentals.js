var passengers, costPP, vans;

passengers = 38;

vans = Math.ceil(passengers/15);

costPP = (vans*250)/passengers;


console.log("$" + costPP.toFixed(2));
