"use strict";
exports.__esModule = true;
exports.Counter = void 0;
var Counter = /** @class */ (function () {
    function Counter(n) {
        this.count = n;
    }
    Counter.prototype.increment = function () {
        return this.count++;
    };
    return Counter;
}());
exports.Counter = Counter;
var counter = new Counter(10);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
