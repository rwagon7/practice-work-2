/*
    Truthy or Falsy
    All values are from are not truthy,
    to remove falsy, the below all should be considered

     - false
     - All forms of zero, 0, -0, & 0n
     - Nan
     - ""
     - null
     - undefined


     The OR Operator || returns if the first value is thruthy
     The AND Operator && returns if the first value is falsy
     The Nullish  Coalesing operator ?? is identical to || except it only treats null and undefined as falsy

*/
var filter = function (arr, fn) {
    //declerative or functional programming
    if (fn === null)
        return arr.filter(function (x) { return x > 10; });
    //imperative or procedural programming
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
};
function greatorThanTen(x) {
    return x > 10;
}
console.log(filter([0, 10, 20, 30], greatorThanTen));
console.log(filter([0, 10, 20, 30], null));
