/*
clousers are the high order functions that returns a function.
these functions can be assignable to a variable

Code Perspective: I used var because I am calling the varibale 
out of the scope hence var which is global is used

tried setting return type of createHelloWorld2 to function it self 
and return one but it throwed an expression

Closuers can used to limit the scope of variables and fucntions

*/

var locationHolder = "Guntur, A.P"

var createHelloWorld = function() {
    return function(){
        return "hello World" + locationHolder;
}
}

console.log(createHelloWorld);

var createHelloWorld2 = () => {
    return function() {
        return "hello world 2" + locationHolder;
    }
}

console.log(createHelloWorld2);

function createAdder(input : number){
    
    function stringConcat(concat : string){
        const result = concat + input ;
        return result;
    }

    return stringConcat;
}

var addedVariable = createAdder(3);

console.log(addedVariable("4"));