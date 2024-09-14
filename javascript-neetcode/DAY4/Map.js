var map = function (arr, fn) {
    if (fn !== null) {
        //procedural programming
        var res = [];
        for (var i in arr) {
            if (fn(arr[i], i)) {
                res.push(arr[i]);
            }
            ;
        }
        return res;
    }
    return [];
};
function fn(x, i) {
    if (x > 10)
        return true;
    return false;
}
console.log(map([0, 10, 20, 30], fn));
