let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
    // TODO: fill the array with 10 candies of various
    // price ranges
   ];

function findCandyByPrice(array, search) {
    for (let i = 0; i < array.length; i++){
        if (array[i].price < search){
            console.log(array[i].product);
        }
    }
    

}


function findCandyContaining(array, search) {
    for (let i = 0; i < array.length; i++){
        if (array[i].product.includes(search)){
            console.log(array[i].product);
        }
    }
}



function findCandyByName(array, search) {

    for (let i = 0; i < array.length; i++){
        if (array[i].product == search){
            console.log("Yes, we carry that product.");
        }
    }

}

findCandyByPrice(products, 4);
console.log(" ");
findCandyContaining(products, "M&M")
console.log(" ");
findCandyByName(products, "Swedish Fish");
