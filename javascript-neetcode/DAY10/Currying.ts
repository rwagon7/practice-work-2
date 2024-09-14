/*
@Param{Fubction fn}
@return{Function}

*/

// use a clousre to maintain state

var curry = function (fn) {

    let nums: number[] = [];

    return function curried(...args) {

        nums = [...nums, ...args];

        if (fn.length === nums.length) {
            const res =  fn(...nums);
            nums = [];
            return res;
        } else {
            return curried;
        }
    }
}

function add2(a, b) { return a + b };
function add3(a, b, c) { return a + b + c };

console.time()
console.log(curry(add3)(1, 2, 3));
console.log(curry(add2)(1, 2));
console.timeEnd();
