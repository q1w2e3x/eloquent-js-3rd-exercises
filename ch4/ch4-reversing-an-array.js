function reverseArray(array) {
    let reversedArray = [];
    if (array == null || !Array.isArray(array)) return null;
    for (i = array.length; i > 0; i--) {
        reversedArray.push(array[i - 1]);
    }
    return reversedArray;
}
function reverseArrayInPlace(array) {
    let middleIndex = Math.floor(array.length / 2);
    for (i = 0; i < middleIndex; i++) {
        let temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]