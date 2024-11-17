/* 

    - Asynchronus code means it ia a non blocking code the following statements will not wait for first statement to complete
    eg: setTimeout(hello, 1000)

    function hello() {
        console.log('hello');
    }

    - promsises in JS are special objects which are async and can have any one of the following 3 states
    - 1.pending | 2.resolved | 3.rejected 

    - Async code makes JS fast even though it is single threaded

    - create a promise we can use 
     
        new Promise()

        function callback(resolve, reject) {
        
        }

        // the function can be blocked by net work call or disk i/o & single threaded

    - this is typical way a callback will be written
    
       function callback(resolve, reject) {
            try {
                //network or disk i/o
                resolve()
            } catch (err) {
                reject()
            }
    }


*/

const promise = new Promise(callback);

promise
    .then(() => console.log('hello...'))
    .catch(() => console.log('promise rejected...'))
    .finally(() => console.log("Promise completed..."));

function callback(resolved, rejected) {
    // change it to respond to resolved
    // setTimeout(() => resolved(), 1000);
    // change it to respond it to rejected
    setTimeout(() => rejected(), 1000);
}

const challenge = async function sleep(millis) {

    function callbackTwo(resolve, reject) {
        console.log("Inside callbackTwo...");
        console.time();
        setTimeout(resolve, millis);
        console.log("Function ran sucessfully....");
        console.timeEnd();
    }

    return new Promise(callbackTwo);
}

challenge();


