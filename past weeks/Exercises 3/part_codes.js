let partCode = "ACE:1-12";

function getSupplier(code){
    let pos = code.indexOf(":");
    let supplier = code.substring(0, pos);
console.log("Supplier: " + supplier);
}

function getProductNumber(code){
    let pos = code.indexOf(":")
    let pos2 = code.indexOf("-");
    let productNumber = code.substring(pos+1, pos2);
    console.log("Product Number: " + productNumber);

}

function getSize(code){
    let pos = code.indexOf("-")
    let size = code.substring(pos+1);

console.log("Size: " + size);
}

getSupplier(partCode);
getProductNumber(partCode);
getSize(partCode);