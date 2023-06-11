// 1) Remove duplicates from an array using a Set

// A Set is a collection of unique values. To remove duplicates from an array:

// First, convert an array of duplicates to a Set. The new Set will implicitly remove duplicate elements.
// Then, convert the set back to an array.
// The following example uses a Set to remove duplicates from an array:
let duplicates = ['A', 'A', 'A', 'B', 'C', 'C','ZZ','ZZ','ZZ','ZZ','ZZ','ZZ','ZZ'];
let uniqueChars = [...new Set(duplicates)];

console.log(uniqueChars) //[ 'A', 'B', 'C' ]