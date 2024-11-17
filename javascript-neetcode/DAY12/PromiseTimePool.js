/* 
    promises are the ones that always return a solution but are asynchronus, to block a task if the network call or disk write in time is taking 
    more, we could use that function

    The propable way is to set timeout, everything inside promise body is synchronus.

    so we will take advantage of the both.

    setTimeout creates a number of memory leaks if the api calls completes before the end of timelimit, soo make sure to closure it in finaly block
*/

var timelimit = function (fn, t) {

    return async function fn(...args) {

        return new Promise((resolve, reject) => {
            const id = setTimeout(() => reject("Time limit exceeded..."), t);
            fn(...args)
                .then(res => resolve(res))
                .catch(res => reject(res))
                .finally(() => clearTimeout(id));
        })
    }
}

var timelimitTwo = function (fn, t) {
    return async function fn(...args) {

        return new Promise( async (resolve, reject) => {
            const id = setTimeout(() => reject("Time limit exceeded..."), t);
            try {
                const res = await fn(...args);
                resolve(res);
            } catch {
                reject(res);
            }
        })

    }
}



async function fn() {
    await setTimeout(() => console.log("inside f..."), 2000);
}

console.log(timelimit(fn, 1000));
console.log(timelimitTwo(fn, 1000));
