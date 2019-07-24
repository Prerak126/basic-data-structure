const getValues = (node, arr) => {
  if (node !== null) {
    getValues(node.left, arr);
    arr.push(node.data);
    getValues(node.right, arr);
  }

  return arr;
}

const getTheValues = (node) => {

  const valuesArray = getValues(node, []);

  return valuesArray
}


const root = {
  data: 6,
  left: {
    data: 4,
    left: {
      data: 10,
      left: {
        data: 5,
        left: null,
        right: null
      },
      right: {
        data: 2,
        left: null,
        right: null
      }
    },
    right: {
      data: 12,
      left: null,
      right: null
    }
  }, right: {
    data: 15,
    left: {
      data: 1,
      left: null,
      right: null
    },
    right: {
      data: 18,
      left: null,
      right: null
    }
  }
}

console.log(root);
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);

    // if(this.root === null){
    //   this.root = newNode
    // } else {
    this.insertData(this.root, newNode)
    // }
  }

  insertData(node, newNode) {
    if (node === null) {
      node = newNode;
    } else if (newNode.data < node.data) {
      this.insertData(node.left, newNode);
    } else {
      this.insertData(node.right, newNode)
    }
  }

}

const valueArray = getTheValues(root);
const sortedArray = valueArray.sort((a, b) => a - b);

console.log(sortedArray);

const convertIntoBST = (node, sortedArray) => {

  if (node !== null) {
    convertIntoBST(node.left, sortedArray);
    node.data = sortedArray.shift();
    convertIntoBST(node.right, sortedArray);
  }

  return node;
}

const BSTRoot = convertIntoBST(root, sortedArray);

console.log(BSTRoot);