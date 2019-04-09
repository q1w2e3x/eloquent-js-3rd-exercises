function range(start, end, step = 1) {
    let result = []
    if (step > 0)
        for (i = start; i <= end; i+= step) {
            result.push(i);
        }
    else if (step < 0) 
        for (i = start; i >= end; i+= step) {
            result.push(i);
        }  
    return result;
}
function sum(numArr) {
    sum = 0;
    if (numArr != null || (sum = null))
      numArr.forEach(element => sum += element);
    return sum;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

