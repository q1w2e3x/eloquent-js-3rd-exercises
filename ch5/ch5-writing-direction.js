require('./scripts.js')

function dominantDirection(text) {
    let directCount = [];
    for (let char of text) {
        let script = getCharScript(char, SCRIPTS);
        if (script == null) continue;
        let index = directCount.findIndex(elem => elem.direction == script.direction);
        if (index == -1) {
            directCount.push({direction: script.direction, count : 0});
        } else directCount[index].count++
    }
    return directCount.reduce((max, current) => current.count > max.count? current : max ).direction; 
}
function getCharScript(char, SCRIPTS) {
    let scriptObj = null;
    let charCode = char.codePointAt(0);
    for (let script of SCRIPTS) {
        if (script.ranges.some(([start, end]) => charCode >= start  && charCode < end)) {
            scriptObj = script;
            break;
        }
    }
    return scriptObj;
}
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl