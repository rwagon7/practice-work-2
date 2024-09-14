/*
* @param {number} n
* @return {Function} counter
*
*/
// var createCounter = function(n){
//     return function(){
//         return n++;
//     }
// }
var createCounter = function (n) {
    var count = n;
    return function () {
        return count++;
    };
};
var counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
