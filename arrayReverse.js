// Array Reverse
// Write a function that will reverse the values an array and return them.

    function reverse(arr) {
        arr.reverse()
        return arr;
    }

    var result = reverse(["a", "b", "c", "d", "e"]);
    console.log(result); // we expect back ["e", "d", "c", "b", "a"]
