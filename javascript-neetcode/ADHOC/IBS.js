var map_arr = [

    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r"],
    ["s", "t", "u"],
    ["v", "w", "z"],
    ["y", "z", " "],

];

var input = "88339";
var input_arr = input.split("");
var answer = "";
var i = 0;
function convertion() {
    while (i < input_arr.length) {
        var ch;

        if (input_arr[i] === input_arr[i + 1] && input_arr[i] === input_arr[i + 2]) { ch = map_arr[input_arr[i] - 1][2]; ++i; ++i }
        else if (input_arr[i] === input_arr[i + 1] && input_arr[i] !== input_arr[i + 2]) { ch = map_arr[input_arr[i] - 1][1]; ++i; }
        else if (input_arr[i] !== input_arr[i + 1] && input_arr[i] === input_arr[i + 2]) { ch = map_arr[input_arr[i] - 1][0]; }
        else if (input_arr[i] !== input_arr[i + 1] && input_arr[i] !== input_arr[i + 2]) { ch = map_arr[input_arr[i] - 1][0]; }
        else { ch = ""; }

        answer += ch;
        // console.log("index", i, "charcacter", ch, "answer", answer);
        ++i;
    }
    return answer;
}

console.log(convertion());