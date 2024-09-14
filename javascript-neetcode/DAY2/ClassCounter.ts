export class Counter {
    
    count;

    constructor(n) {
        this.count = n;
    }

    increment() {
        return this.count++;
    }
}

const counter = new Counter(10);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());