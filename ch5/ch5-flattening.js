let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(array) {
    return array.reduce((resultArr, subArr) => resultArr.concat(subArr), []);
}

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]