'use strict';
class Node {
    constructor(value, left = null, right = null) { // here the left and right are null cuz the first node i'll implement will have no rigt and left
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
module.exports = Node;