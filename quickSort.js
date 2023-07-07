const arr1 = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30]
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr // base case
    }
    let pivot = arr[arr.length - 1] // last element
    let left = []   // left array
    let right = []  // right array
    for (let i = 0; i < arr.length - 1; i++) { // iterates throguh the array and compares the elements to the pivot
        if (arr[i] < pivot) {
            //if the element is less than the pivot, it goes to the right array
            left.push(arr[i])
        } else {
            // same idea for the right
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
    // the recursive call is here  and is when teh function is called again 
    // we know the array is sorted when the base case is met cause that means there is no more elements to sort
    // here we are using spread to combine the rest of the elft and the rest of the right at teh pivot
}

console.log(quickSort(arr1))