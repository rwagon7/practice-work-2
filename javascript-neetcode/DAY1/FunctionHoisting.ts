/*
hoisting functions are those functions that work even when the 
function is called before the function declaration.
it does so by hoisting all the functions to the top and statments below it.
Function hoisting is not there in python

declaring anonymus functions
- const function = function() {return "hello world";}
- const function = (a,b) => {return a + b;}

Note : Anonymous functions donot support function hoisting

Variable 'sub' is used before being assigned. when java hoisting a variable

*/


console.log(add(1,2));
// console.log(sub(2,1));

function add(a: number, b: number) {
    return a + b;
}

var sub = (a,b) => {
 return 2 - b;
}