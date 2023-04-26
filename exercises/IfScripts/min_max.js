var a, b, c, smallest, biggest;

a=24684312;
b=23;
c=34895;

if (a > b && a > c){
biggest=a;
}
else if (b > c){
    biggest=b;
}
else {
    biggest=c;
}

if (a < b && a < c){
    smallest=a;
    }
else if (b < c){
    smallest=b;
    }
else {
    smallest=c;
    }

console.log("The biggest number is " + biggest);
console.log("The smallest number is " + smallest);