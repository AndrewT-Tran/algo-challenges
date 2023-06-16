/*
    Given an array of objects / dictionaries to represent new inventory,
    and an array of objects / dictionaries to represent current inventory,
    update the quantities of the current inventory

    if the item doesn't exist in current inventory, add it to the inventory

    return the current inventory after updating it.
*/

const newInv1 = [
	{ name: "Grain of Rice", quantity: 9000 },
	{ name: "Peanut Butter", quantity: 50 },
	{ name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
	{ name: "Peanut Butter", quantity: 20 },
	{ name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
	{ name: "Peanut Butter", quantity: 70 },
	{ name: "Grain of Rice", quantity: 9001 },
	{ name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 */

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */

// function updateInventory(newInv, currInv) {
// for (let i = 0; i < newInv.length; i++) {
//     let found = false;
// 	for (let j = 0; j < currInv.length; j++) {
//         if (newInv[i].name === currInv[j].name) {
//             currInv[j].quantity += newInv[i].quantity;
// 			found = true;
// 		}
// 	}
// //     }
// 	if (!found) {
//         currInv.push(newInv[i]);
// 	}
//     return currInv;
// }
//     }

function updateInventory(newInv, currInv) {
	for (let i = 0; i < newInv.length; i++) {
		const newItem = newInv[i];
		const existingItemIndex = currInv.findIndex(
			(item) => item.name === newItem.name
		);
		//find the index of the existing item in the currInv array that has the same name property as the newItem.

		if (existingItemIndex !== -1) {
			// if there is an existing item
			currInv[existingItemIndex].quantity += newItem.quantity; // increment value of existing item
		} else {
			currInv.push(newItem); // push the new item into the currInv array
		}
	}
	return currInv;
}
console.log(updateInventory(newInv1, currInv1));
console.log(updateInventory(newInv2, currInv2));
console.log(updateInventory(newInv3, currInv3));
console.log(updateInventory('Peanut Butter'))