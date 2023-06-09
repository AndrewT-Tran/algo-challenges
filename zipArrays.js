/*
    Zip Arrays into Map


    Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.

    Associative arrays are sometimes called maps because a key (string) maps to a value
 */

const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];
const expected1 = {
    abc: 42,
    3: "wassup",
    yo: true,
};

const keys2 = ['a', "b", "c"];
const vals2 = [1, 2, 3];
const expected2 = {};

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
// function zipArraysIntoMap(keys, values) {
//     const object = {};
//     for (let i = 0; i < keys.length; i++) { //iterates through keys
//         object[keys[i]] = values[i]; // sets the object to be the key value at i to values at i
// console.log("key @ i ", keys[i], "  values @ i " , values[i]);
//         console.log("current obj --- " , object);
//     }
//     return object;

// }
//forEach way
function zipArraysIntoMap(keys, values) {
    const object2 = {};
    keys.forEach((key, i) => { // iterates over keys and sets key to string
        console.log('key - ',key,'i = ', i)
        object2[key] = values[i];
// here we take the new key string to be a obj key and values to be values
// obj
    }
    );
    return object2;

}
console.log(zipArraysIntoMap(keys1, vals1))

console.log(zipArraysIntoMap(keys2, vals2))
/*****************************************************************************/

/*
    Invert Hash

    A hash table / hash map is an obj / dictionary

    Given an object / dict,
    return a new object / dict that has the keys and the values swapped so that the keys become the values and the values become the keys
*/

const obj_1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected_1 = { Zaphod: "name", high: "charm", dicey: "morals" };

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, any>} obj
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {
    const newObj = {};
    for (const key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
}
console.log(invertObj(obj_1))
/*****************************************************************************/
