function every(array, test) {
    for (let elem of array) {
        if (!test(elem)) return false;
    }
    return true;
}

function everyWithSome(array, test) {
    if (array.some(elem => !test(elem))) return false;
    else return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true