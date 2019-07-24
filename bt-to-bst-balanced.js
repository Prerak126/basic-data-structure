
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

const getValues = (node, arr) => {
    if (node !== null) {
        getValues(node.left, arr);
        arr.push(node.data);
        getValues(node.right, arr)
    }

    return arr
}

const getValuesArray = node => {
    return getValues(node, []);
}


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insertData(node, newNode) {
        if (node.data > newNode.data) {
            if(node.left === null){
                node.left = newNode
            } else this.insertData(node.left, newNode)
        } else {
            if(node.right === null){
                node.right = newNode;
            } else this.insertData(node.right, newNode)
        }
    }

    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertData(this.root, newNode);
        }
    }
}

const BTtoBST = node => {
    const valuesArray = getValuesArray(node).sort((a, b) => a - b);

    console.log(valuesArray)

    const rootvalue = valuesArray[Math.floor(valuesArray.length / 2)];
    valuesArray.splice(Math.floor(valuesArray.length / 2), 1);
    console.log(rootvalue);
    console.log(valuesArray);


    const bst1 = new BST();

    bst1.insert(rootvalue);
    console.log(bst1);
    valuesArray.forEach(value => bst1.insert(value));

    return bst1;
}


console.dir(BTtoBST(root))