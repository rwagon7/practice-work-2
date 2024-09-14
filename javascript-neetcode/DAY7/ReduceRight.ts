/*
    let functions be an array of functions, apply the functions in reverse order.
    functions = [f(x), g(x), h(x)] -> f(g(h(x)))
    
    input will be = [ff1, f2, f3, ...]

*/

var compose = function (functions) {
    return function (x) {
        for (const fn of functions.reverse()) {
            x = fn(x);
        }
        return x;
    }
}

function f1(x) {
    return x + 1;
}

function f2(x) {
    return 2 * x;
}

var composeFn = compose([x => x + 1, x => 2 * x]);
console.log(composeFn(2));

var composeTwo = function (functions) {

    // reduce lambda
    const fn = (acc, f) => f(acc);

    // reduce right
    return function (x) {
        return functions.reduceRight(fn, x);
    }
}

composeFn = composeTwo([x => x + 1, x => 2 * x]);
console.log(composeFn(2));