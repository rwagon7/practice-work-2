/* 
    functions can also be called with a new key word, where the funtion has a insance variable.

    
function dog(name){
    this.name = name;
}

const dog1 = new dog("bard");
const dog2 = dog("cooper");

console.log(dog1.name);
//console.log(dog2.name); ts knows this automatically


*/

// method 1

// var TimeLimitCache = function () {
//     this.cache = new Map();
// }

// TimeLimitCache.prototype.set = function (key, value, duration) {
//     const alreadyExists = this.cache.get(key);
//     if (alreadyExists) {
//         clearTimeout(alreadyExists.timeOutId);
//     }
//     const timeOutId = setTimeout(() => {
//         this.cache.delete(key);
//     }, duration);
//     this.cache.set(key, { value, timeOutId });
//     return Boolean(alreadyExists);

// }

// TimeLimitCache.prototype.get = function (key) {
//     if (this.cache.has(key))
//         return this.cache.get(key).value;
//     return -1;
// }

class TimeLimitCache {
    cache = new Map();

    set(key, value, duration) {
        const alreadyExists = this.cache.get(key);
        if (alreadyExists) {
            clearTimeout(alreadyExists.timeOutId);
        }
        const timeOutId = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        this.cache.set(key, { value, timeOutId });
        return Boolean(alreadyExists);
    }

    get(key){
        if (this.cache.has(key))
         return this.cache.get(key).value;
     return -1;
    }

    count(){
        return this.cache.size;
    }
}

console.time()
var limit = new TimeLimitCache();
console.log(limit.count());
console.log(limit.set(1, "hello", 1000));
console.log(limit.count());
console.log(limit.set(1, "world", 1000));
console.log(limit.count());
console.log(limit.cache);
console.timeEnd();