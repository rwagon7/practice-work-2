var map = function (arr: number[], fn: Function | null) {

    if (fn !== null) {
        //procedural programming
        const res: number[] = [];
        for (const i in arr) {
            if(fn(arr[i], i)){
                res.push(arr[i]);
            };
        }

        return res;
    }

    return [];
}


function fn(x: number, i: number) {
    if (x > 10) return true;
    return false;
}

console.log(map([0, 10, 20, 30], fn));