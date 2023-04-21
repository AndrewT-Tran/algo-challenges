var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Could we determine if a certain value was present? Write a function called isPresent2d(arr2d, value) that returns true if the value is present and false otherwise

// Note - Don't assume the array will always be the same size, we must rely on its .length property

// Hint - Can we put a for loop inside another for loop?
var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];

function isPresent2d(arr2d , value){
    for(var i = 0; i < arr2d.length; i++){
        console.log(arr2d[i]) // 3 there are 3 arrays 
        for(var j = 0; j < arr2d[i].length; j++){ //iterates through each row of array
            console.log(arr2d[j])
            if(arr2d[i][j] == value){
                return true;
            }
        }
    }
    return false;
}
console.log(isPresent2d(arr2d, 9))



// complete the following function
function flatten(arr2d) {
    var flat = [];
    for(var i = 0; i < arr2d.length; i++){ //outer loop iterates through each array
        // 3 arrays so only loops through 3 sets
        console.log("outer i = " + i)
        console.log('outter loop j = ' + arr2d[i])
        for(var j = 0; j < arr2d[i].length; j++){ //inner loop iterates through each element of each array
            console.log('inner loop j = ' + arr2d[i][j])
            //loops through EACH SET OF ARRAY and pushes val to array
            flat.push(arr2d[i][j]);
        }
    }

    

    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

