/* 
    memoization is used in dynamic programmoign wher e common inuts are chached.
    This is because all of them are used at once

*/

var memoizeCount = 0;

function memoize(fn) {
    //caching variable
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            console.log("inside memoized block...");
            memoizeCount++;
            return cache[key];
        }

        cache[key] = fn(...args);
        return cache[key];

    }
}

function refuceFn(...arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const x = memoize(refuceFn);
console.log(x(1, 2, 3));
console.log(x(2, 4));
console.log(x(1, 2, 3));
console.log(x(1, 2, 3));
console.log(x(1, 3, 2));
console.log("memoize count", memoizeCount);

// this useage of wrapper function is known as decorator pattern
// for a given input the cache will have the same arraypassing , console.log it if you want to check

function arguments(...args) {
    console.log(JSON.stringify(args));
}

arguments(1, 2, 3);