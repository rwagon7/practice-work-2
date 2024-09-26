// deep equals 1 === "1" -> false
// equals      1 ==  "1" -> true

// typeof to find the type of object
const a = { "a": "1" };
const b = [1, 2, 3];
// const variables need to be intialized
let c;

console.log(typeof a);
console.log((typeof a) === "object");
console.log(typeof 1);
console.log(typeof b);
console.log(Array.isArray(b));
console.log(typeof c);
c = null;
console.log(typeof c);

// we check deeply using string() function which returns typeof but a string
const i = [1, 2];
const j = { '0': 1, '1': 2 };
// checking type of with String() function
console.log(String(i));
console.log(String(j));
//deep Equals
console.log(String(a) === String(b));

var areDeeplyEqual = function (o1, o2) {

    if (o1 === null || o2 === null) {
        return o1 === o2;
    }

    if (typeof o1 !== typeof o2) {
        return false;
    }

    if (typeof o1 !== 'object') {
        return o1 === o2;

    }

    if (Array.isArray(o1) || Array.isArray(o2)) {
        if (String(o1) !== String(o2)) {
            return false;
        }
        for (let i = 0; i < o1.length; i++) {
            if (!areDeeplyEqual(o1[i].o2[i])) {
                return false;
            }
        }
    } else {
        if (Object.keys(o1).length !== Object.keys(o2).length) {
            return false;
        }
        for (let key in o1) {
            if (!areDeeplyEqual(o1[key], o2[key])) {
                return false;
            }
        }
    }
};