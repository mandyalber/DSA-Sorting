class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
    };

    insertFirst(node) {
        this.head = new _Node(node, this.head);
    };

    insertLast(node) {
        if (this.head === null) {
            this.insertFirst(node);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(node, null);
        };
    };

    remove(node) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === node) {
            this.head = this.head.next;
            return;
        }
        let currentNode = this.head;
        let previousNode = this.head;

        while ((currentNode !== null) && (currentNode.value !== node)) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (currentNode === null) {
            return 'node not found';
        }
        previousNode.next = currentNode.next;
    }

    find(node) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;

        while (currentNode.value !== node) {
            if (currentNode.next === null) {
                return null;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        return currentNode;
    }

    insertBefore(node, key) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;
        let previousNode = this.head;

        while (currentNode.value !== key) {
            if (currentNode.next === null) {
                return null;
            }
            else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        previousNode.next = new _Node(node, currentNode);
    }

    insertAfter(node, key) {
        if (!this.head) {
            return null;
        }
        let currentNode = this.head;

        while (currentNode.value !== key) {
            if (currentNode.next === null) {
                return null;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        currentNode.next = new _Node(node, currentNode.next)
    }

    insertAt(node, key) {
        if (!this.head) {
            return null;
        }
        if (key === 0) {
            this.insertFirst(node);
        }

        let currentNode = this.head;
        let previousNode = this.head;
        let count = 0;

        while (count < key) {
            if (currentNode.next === null) {
                return null
            }
            else {
                count++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        previousNode.next = new _Node(node, currentNode);
    }
}

module.exports = {
    LinkedList, 
    _Node
}