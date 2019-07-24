class Node {
  constructor(value) {
    this.data = value;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.dataArray = [];
    this.sum = 0
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertData(this.root, newNode);
    }
  }

  insertData(node, newNode) {

    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertData(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertData(node.right, newNode)
      }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        const aux = this.findMinNode(node.right);
        node.data = aux.data;

        node.right = this.removeNode(node.right, aux.data);
        return node;
      }
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.dataArray.push(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  findMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }

  search(data) {
    return this.searchData(this.root, data);
  }

  searchData(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchData(node.left, data);
    } else if (data > node.data) {
      return this.searchData(node.right, data);
    } else {
      return node
    }
  }

  getRootNode() {
    return this.root;
  }

  getDataArray() {
    return this.dataArray;
  }

  replaceDataContent(node) {
    if (node !== null) {
      this.replaceDataContent(node.left);
      this.sum = this.sum - this.dataArray.shift();
      node.data = this.sum;
      this.replaceDataContent(node.right);
    }
  }

  totalSum() {
    this.sum = eval(this.dataArray.join('+'))
  }

  replaceData() {
    this.dataArray = [];
    this.inOrder(this.root);
    this.totalSum();
    this.replaceDataContent(this.root);
  }

  lca(node1, node2, mainNode) {
    const node = mainNode ? mainNode : this.root;
    if (node === null) {
      return null;
    } else if (node.data > node1 && node.data > node2) {
      return this.lca(node1, node2, node.left)
    } else if (node.data < node1 && node.data < node2) {
      return this.lca(node1, node2, node.right)
    } else {
      return node;
    }
  }
}

const bst1 = new BST();
bst1.insert(10);
bst1.insert(4);
bst1.insert(6);
bst1.insert(7);
bst1.insert(1);
bst1.insert(3);
bst1.insert(5);
bst1.insert(2);
bst1.insert(12);
bst1.insert(14);
bst1.insert(17);
bst1.insert(18);
bst1.insert(15);
bst1.insert(16);
bst1.insert(19);

const root = bst1.getRootNode();

// console.dir(root);

// bst1.inOrder(root);
// console.log(bst1.dataArray);
// bst1.replaceData();

// bst1.inOrder(bst1.root);
// console.log(bst1.dataArray);

bst1.lcm(14, 17);

console.dir(bst1);