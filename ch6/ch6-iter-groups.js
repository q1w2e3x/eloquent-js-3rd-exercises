class Group {
    constructor() {
        this.collection = [];
    }
    add(value) {
       if (!this.collection.includes(value)) this.collection.push(value);
    }
    delete(value) {
        let valueIndex = this.collection.indexOf(value);
        if (valueIndex != -1) this.collection.splice(valueIndex, 1);
    }
    has(value) {
        return this.collection.includes(value);
    }
    static from(...items) {
        let resultGroup = new Group();
            for (let element of items) {
                resultGroup.add(element);
            }
        return resultGroup;
    }
}
class GroupIterator {
    constructor(group) {
        this.collection = group.collection;
        this.index = 0;
    }
    next() {
        if (this.index >= this.collection.length) {
            return {done: true};
        }
        let nextValue = this.collection[this.index++];
        return {value: nextValue, done:false};
    }
}
Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}


for (let value of Group.from(...["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c