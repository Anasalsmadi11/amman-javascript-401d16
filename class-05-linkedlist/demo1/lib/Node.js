'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; //here it is null because the first it is pointing to nothing
    }
}

module.exports = Node;