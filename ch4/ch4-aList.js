function arrayToList(array) {
    let listHead = {};
    let curList = listHead;
    if (array == null || !Array.isArray(array) || array.length == 0) return null;
    let i = 0;
    while(i < array.length) {
        curList.value = array[i];
        if (++i >= array.length) curList.rest = null;
        else {
            curList.rest = {};
            curList = curList.rest;
        }
    }
    return listHead;
}
function prepend(element, list) {
    newList = {};
    newList.value = element;
    newList.rest = list;
    return newList;
}
function nth(list, index) {
    let curList = list;
    for (i = 0; i!= index && curList != null; i++) {
        curList = list.rest;
    }
    return curList.value;
}
function listToArray(list) {
    let values = [];
    while (list != null) {
        values.push(list.value);
        list = list.rest;
    }
    return values;
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20