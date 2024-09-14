/* 
    Array reduce recursively runs over a reduce function to get a value
*/

var reduce = function (nums: number[], fn, init: number) {

    let res: number = init;

    // method1

    // for (const n of nums) {
    //     res = fn(res, n);
    // }

    // return res;

    // method2

    return nums.reduce(fn, init);
}

function fn(init: number, n: number) {
    return init + n;
}

console.log(reduce([1, 2, 3], fn, 0));