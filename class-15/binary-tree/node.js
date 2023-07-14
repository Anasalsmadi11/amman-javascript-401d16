'use strict';
class Node {
     // here the value param should be put at the first of the params cus once i put value to a new node it will take the first params here
    constructor(value, left = null, right = null) { // here the left and right are null cuz the first node i'll implement will have no rigt and left
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
module.exports = Node;