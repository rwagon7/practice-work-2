var createCounter = function (init) {
    var count = init;
    function increment() {
        return ++count;
    }
    function decrement() {
        return --count;
    }
    function reset() {
        count = init;
        return count;
    }
    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    };
};
var counter = createCounter(10);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset());
