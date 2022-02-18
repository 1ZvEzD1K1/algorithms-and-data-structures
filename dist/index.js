"use strict";
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
        this.value = value;
        this.next = next;
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }
    //---------------------------------------------------------------------
    prepend(value) {
        const newListNode = new ListNode(value, this.head);
        this.head = newListNode;
        if (!this.tail) {
            this.tail = newListNode;
        }
        return this;
    }
    //---------------------------------------------------------------------
    append(value) {
        const newListNode = new ListNode(value);
        if (!this.head || !this.tail) {
            this.head = newListNode;
            this.tail = newListNode;
            return this;
        }
        this.tail.next = newListNode;
        this.tail = newListNode;
        return this;
    }
    //---------------------------------------------------------------------
    delete(value) {
        if (!this.head)
            return null;
        let delNode = null;
        while (this.head && this.head.value === value) {
            delNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;
        if (currentNode !== null) {
            while (currentNode.next) {
                if (currentNode.next.value === value) {
                    delNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                }
                else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail && this.tail.value === value)
            this.tail = currentNode;
        return delNode;
    }
    //---------------------------------------------------------------------
    find(value) {
        if (!this.head)
            return null;
        let currentListNode = this.head;
        while (currentListNode) {
            if (value !== undefined && currentListNode.value === value)
                return currentListNode;
            currentListNode = currentListNode.next;
        }
        return null;
    }
    //---------------------------------------------------------------------
    deleteTail() {
        if (!this.tail)
            return null;
        const delTail = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return delTail;
        }
        let currentNode = this.head;
        while (currentNode && currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            }
            else {
                currentNode = currentNode.next;
            }
        }
        this.tail = currentNode;
        return delTail;
    }
    //---------------------------------------------------------------------
    deleteHead() {
        if (!this.head) {
            return null;
        }
        const delHead = this.head;
        if (this.head.next) {
            this.head = this.head.next;
        }
        else {
            this.head = null;
            this.tail = null;
        }
        return delHead;
    }
    //---------------------------------------------------------------------
    fromArray(arr) {
        for (let el of arr) {
            this.append(el);
        }
        return this;
    }
    toArray() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode);
            currentNode = currentNode.next;
        }
        return arr;
    }
    //---------------------------------------------------------------------
    toString(callback) {
        return this.toArray()
            .map((node) => node.toString(callback))
            .toString();
    }
    //---------------------------------------------------------------------
    reverse() {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;
        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
        return this;
    }
}
//---------------------------------------------------------------------
let list = new LinkedList();
//console.log(list);
list.append(123);
list.prepend("124214");
list.append("ewrert");
list.append("fghbng");
list.append("fghbng");
list.append("fghbng");
list.append("fghbng");
list.append("fghbng");
list.prepend("124214");
list.prepend("124214");
list.prepend("124214");
list.fromArray([123, '12435', { name: "Vasia" }]);
list.prepend("werwet");
console.log(list);
console.log(list.reverse());
//console.log(list.delete('fghbng'));
//console.log(list.find('ewrert'));
//console.log(list.toArray());
//console.log(list.toString());
//console.log(list.reverse());
