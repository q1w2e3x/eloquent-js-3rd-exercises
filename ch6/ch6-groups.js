class Group {
    constructor() {
        this.group = [];
    }
    add(value) {
       if (!this.group.includes(value)) this.group.push(value);
    }
    delete(value) {
        let valueIndex = this.group.indexOf(value);
        if (valueIndex != -1) this.group.splice(valueIndex, 1);
    }
    has(value) {
        return this.group.includes(value);
    }
    static from(iterable) {
        let resultGroup = new Group();
        if (Symbol.iterator in iterable) {
            for (let element of iterable) {
                resultGroup.add(element);
            }
        }
        return resultGroup;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false