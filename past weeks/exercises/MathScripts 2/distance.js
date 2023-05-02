var x1, x2, y1, y2, presqrt, distance;
x1 = 1;
x2 = 1;
y1 = 2;
y2 = 5;

// square root of (x2-x1)^2 + (y2-y1)^2

presqrt=Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2);

distance=Math.sqrt(presqrt);

console.log( "The distance between (" + x1 +", " + y1 + ") and (" + x2 + ", " + y2 + ") is " + distance + ".");

