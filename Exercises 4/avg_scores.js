let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 
let sum = 0;

 function getAverage(scores){
    let numLength = scores.length;
    let sum = 0;
    for(let i = 0; i < numLength; i++) {
    
        sum += scores[i];
        }
       
  let average = sum/numLength;

return average;

 }


let average = getAverage(myScores);
console.log("My Scores: " + average);

let average2 = getAverage(yourScores);
console.log("Your scores: " + average2);