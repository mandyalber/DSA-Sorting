/*Given a Linked List, sort the linked list using merge sort. You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.*/

const { LinkedList, _Node } = require('./LinkedList');
const list = new LinkedList();

let nodes = [5, 6, 2, 1, 3, 7, 4, 9, 8];
nodes.forEach(node => list.insertFirst(node));

function sortLinkedList(head) {
    //if list is one, return list
    if(head === null || head.next === null){
        return head;
    }
    //middle = round(list/2)
    let previousNode = null;
    let slowNode = head;
    let fastNode = head;

    while (fastNode !== null && fastNode.next !== null){
        fastNode = fastNode.next.next;
        previousNode = slowNode;
        slowNode = slowNode.next;
    }

    previousNode.next = null;
    //left = slice list from head to middle
    //right = slice list from middle to list length
    const left = sortLinkedList(head);
    const right = sortLinkedList(slowNode);
    
    //return merge left + right
    const _merge = (left, right) => {
        const head = new _Node();
        let current = head;

        while (left !== null && right !== null){
            if(left.value < right.value){
                current.next = left;
                left = left.next;
            }
            else {
                current.next = right;
                right = right.next;
            }
            current = current.next;
        }
        current.next = (left === null) ? right : left;
        return head.next
    };

    return _merge(left, right);

}

console.log(sortLinkedList(list.head))
