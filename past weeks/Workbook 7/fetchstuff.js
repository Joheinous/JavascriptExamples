// function fetch(url: string): Promise {
//     let promise = {
//         then: function() {
    
//         }
//         return promise;
//     }

// }



let promise = fetch("https://jsonplaceholder.typicode.com/users/1");
function logUser(response){
    console.log(response);
    //JSON.parse(response.body)
    response.json().then(function(body) { console.log(body);});
}

promise.then(logUser)

console.log("Got Promise");
console.log(promise);


