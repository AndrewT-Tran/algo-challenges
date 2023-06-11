// You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

// e.g. transposeTwoStrings(['Hello','World']);

// should return:
// H W  
// e o  
// l r  
// l l  
// o d

function transposeTwoStrings(arr){
    let stringOne = arr[0]
    let stringTwo = arr[1]
    let transposed = ''
    for (let i =0; i <arr[0].length; i++){
        transposed+= stringOne.charAt(i) + ' ' + stringTwo.charAt(i) + '\n\r'
    }
    return transposed
}
console.log(transposeTwoStrings(['Hello', 'Puta']))