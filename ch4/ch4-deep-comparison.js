function deepEqual(first, second) {
    if (first != null && typeof first == "object" 
            && second != null && typeof second == "object") {
        let firstKeys = Object.keys(first);
        let secondKeys = Object.keys(second);
        if (firstKeys.length === secondKeys.length) {
            for (let key of firstKeys) {
                if (!secondKeys.includes(key) || !deepEqual(first[key], second[key]))
                    return false;
            }
        } else return false;
        return true;
    }
    else return (first === second);
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true