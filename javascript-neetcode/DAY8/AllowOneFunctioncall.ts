/*
    create a function that can be called only once....!
    use a boolean
 */

var once = function (fn) {
    // flag
    let called = false;
    // returning a function tat takes ing any number of arguments
    return function (...args) {
        if (called) {
            console.log("called", called);
            return undefined;
        }

        called = true;
        return fn(...args);
    }
}// end of once

console.log(once((a, b, c) => a + b + c)(1, 2, 3));// calling once
console.log(once((a, b, c) => a + b + c)(1, 2, 3));// calling twice

class Person {
    called = false
    name = "ani"

    getName() {
        if (this.called) return true;
        console.log(`method can only be called once... ${this.name}`);
    }
}

new Person().getName();

var contact = {
    name : "Ani"
}

function printName(greeting1, greeting2) {
    console.log(`Hello world, My Name is ${this.name}, ${greeting1} ${greeting2}`);
}

// apply can be a mixture of single and array of variables
printName.apply(contact, ['Namaste', 'Do not be arrogant']);