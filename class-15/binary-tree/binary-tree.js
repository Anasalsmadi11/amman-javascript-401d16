'use strict';
class BinaryTree {
    constructor(root = null) {
        this.root = root; // here i put the root cuz when i create the tree it will have at least a root
    }
    preOrder() {
        let result = []; // cuz i want to return my tree in an array
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left); // here it goes to the next node.left value because it is recursion function,and i dont have next property in my node obj
            if (node.right) traverse(node.right); // here node value is the first node value , it wont take the traversed first if statement value, see the explaining below
        }
        traverse(this.root); // im starting from the root
        return result;
    }
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }
}


module.exports = BinaryTree;


// traverse(node){ //1
//     result.push(node.value); //[1]
//     if (node.left) traverse(node.left){ //2
//                             result.push(node.left.value); // [1,2]
//                             if (node.left.left) traverse(node.left.left); {
//                             if (node.right) traverse(node.right) //3
//                         }
//     if (node.right) traverse(node.right)
// }
// }