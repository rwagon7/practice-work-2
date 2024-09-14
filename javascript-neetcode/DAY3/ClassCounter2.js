var CreateCounterTwo = /** @class */ (function () {
    function CreateCounterTwo(init) {
        this.init = init;
        this.count = init;
    }
    CreateCounterTwo.prototype.increment = function () {
        return ++this.count;
    };
    CreateCounterTwo.prototype.decrement = function () {
        return --this.count;
    };
    CreateCounterTwo.prototype.reset = function () {
        this.count = this.init;
        return this.init;
    };
    return CreateCounterTwo;
}());
var counterTwo = new CreateCounterTwo(0);
console.log(counterTwo.increment());
console.log(counterTwo.decrement());
console.log(counterTwo.increment());
console.log(counterTwo.reset());
