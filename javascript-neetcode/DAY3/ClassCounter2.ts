class CreateCounterTwo {

   private init: number;
   private count: number;

    constructor(init: number) {
        this.init = init;
        this.count = init;
    }

    increment(): number {
        return ++this.count;
    }

    decrement(): number {
        return --this.count;
    }

    reset(): number {
        this.count = this.init;
        return this.init;
    }
}

var counterTwo = new CreateCounterTwo(0);

console.log(counterTwo.increment());

console.log(counterTwo.decrement());

console.log(counterTwo.increment());

console.log(counterTwo.reset());
