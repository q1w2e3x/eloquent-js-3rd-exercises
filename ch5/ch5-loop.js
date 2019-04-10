function loop(value, test, update, body) {
    let curValue = value;
    while(test(curValue)) {
        body(curValue);
        curValue = update(curValue);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1