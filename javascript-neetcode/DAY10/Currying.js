/*
@Param{Fubction fn}
@return{Function}

*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// use a clousre to maintain state
var curry = function (fn) {
    var nums = [];
    return function curried() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        nums = __spreadArray(__spreadArray([], nums, true), args, true);
        if (fn.length === nums.length) {
            var res = fn.apply(void 0, nums);
            nums = [];
            return res;
        }
        else {
            return curried;
        }
    };
};
function add2(a, b) { return a + b; }
;
function add3(a, b, c) { return a + b + c; }
;
console.time();
console.log(curry(add3)(1, 2, 3));
console.log(curry(add2)(1, 2, 3));
console.timeEnd();
