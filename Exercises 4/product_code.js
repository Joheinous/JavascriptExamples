// function getSupplier(code){
//     let pos = code.indexOf(":");
//     let supplier = code.substring(0, pos);
// console.log("Supplier: " + supplier);
// }

// function getProductNumber(code){
//     let pos = code.indexOf(":")
//     let pos2 = code.indexOf("-");
//     let productNumber = code.substring(pos+1, pos2);
//     console.log("Product Number: " + productNumber);

// }

// function getSize(code){
//     let pos = code.indexOf("-")
//     let size = code.substring(pos+1);

// console.log("Size: " + size);
// }

// getSupplier(partCode);
// getProductNumber(partCode);
// getSize(partCode);

let partCode = "ACE:1-12";

function parseProductCode(code){
    let pos = code.indexOf(":");
    let supplier = code.substring(0, pos);

    let pos1 = code.indexOf(":")
    let pos2 = code.indexOf("-");
    let productNumber = code.substring(pos1+1, pos2);

    let pos3 = code.indexOf("-")
    let size = code.substring(pos3+1);

    let part1 = {
        supplier: supplier,
        productNumber: productNumber,
        size: size
    };

    return part1;
    
}

let part1 = parseProductCode(partCode);

console.log("Supplier: " + part1.supplier +
" Product Number: " + part1.productNumber +
" Size: " + part1.size);