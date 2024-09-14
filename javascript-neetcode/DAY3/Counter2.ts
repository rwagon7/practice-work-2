var createCounter = function(init: number) {

    let count = init;

    function increment(){
        return ++count;
    }

    function decrement(){
        return --count;
    }

    function reset(){
        count = init
        return count;
    }

    return {

        increment: increment,
        decrement:decrement,
        reset:reset    
    }

    // return {

    //     increment: increment,
    //     decrement:decrement,
    //     reset:reset    
    // }
}

const counter = createCounter(10);

console.log(counter.increment());

console.log(counter.decrement());

console.log(counter.increment());

console.log(counter.reset());