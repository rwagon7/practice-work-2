/* 
    implements a function that takes in any numbers of functions as one parameter and n as the limit the first n number of functions at same time.






*/

var PromisePool = async function (functions, n) {
    return new Promise((resolve, reject) => {
        let i = 0;
        let inProgress = 0;

        function callback() {
            if (i === functions.length && inProgress == 0) {
                resolve();
            }

            while (i < functions.length && inProgress < n) {
                functions[i++]()
                    .then(() => {
                        inProgress--;
                        callback();
                    })

                inProgress++;
            }

            callback();
        }
    });

}

var sleep = () => console.log("some process...!");

//console.log(PromisePool([() => setTimeout(sleep(), 500), () => setTimeout(sleep(), 400), () => setTimeout(sleep(), 200)], 2));



var PromisePoolTwo = async function (functions, n) {
    let i = 0;

    async function callback() {
        if (i === functions.length) {
            return;
        }
        await functions[i++]();
        await callback();
    }

    // const nPromises = [];

    // while (i < n) {
    //     nPromises.push(callback());
    // }

    const nPromises = Array(n).fill().map(callback);

    await Promise.all(nPromises);
}


console.log(PromisePoolTwo([() => setTimeout(sleep(), 500), () => setTimeout(sleep(), 400), () => setTimeout(sleep(), 200)], 2));