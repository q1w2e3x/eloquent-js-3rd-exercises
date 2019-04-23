class PGroup {
    constructor(group) {
        this.group = group;
    }
    add(value) {
       if (!this.group.includes(value)) {
           return new PGroup(this.group.concat([value]));
       }
    }
    delete(value) {
        return new PGroup(this.group.filter(elem => elem !== value)); 
    }
    has(value) {
        return this.group.includes(value);
    }
}
PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false