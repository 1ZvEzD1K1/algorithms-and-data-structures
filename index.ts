interface IListNode {
  toString(callback?: (value: any) => string): string;
}

interface ILinkedList {
  prepend(value: any): LinkedList | null;
  append(value: any): LinkedList | null;
  delete(value: IListNode): ListNode | null;
  find(value: IListNode): ListNode | null;
  deleteTail(): ListNode | null;
  deleteHead(): ListNode | null;
  fromArray(arr: Array<any>): LinkedList;
  toArray(): ListNode[];
  toString(callback?: (value: any) => string): string;
  reverse(): LinkedList;
}

class ListNode implements IListNode {
  constructor(public value: any, public next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }

  public toString(callback?: (value: object) => string) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList implements ILinkedList {
  constructor(
    public head: ListNode | null = null,
    public tail: ListNode | null = null
  ) {}

  //---------------------------------------------------------------------
  public prepend(value: any) {
    const newListNode = new ListNode(value, this.head);
    this.head = newListNode;
    if (!this.tail) {this.tail = newListNode}
    return this;
  }
  //---------------------------------------------------------------------
  public append(value: any) {
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
  public delete(value: IListNode) {
    if (!this.head) return null;

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
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if (this.tail && this.tail.value === value) this.tail = currentNode;

    return delNode;
  }
  //---------------------------------------------------------------------
  public find(value?: IListNode) {
    if (!this.head) return null;

    let currentListNode: ListNode | null = this.head;

    while (currentListNode) {
      if (value !== undefined && currentListNode.value === value) return currentListNode;
      currentListNode = currentListNode.next;
    }

    return null;
  }
  //---------------------------------------------------------------------
  public deleteTail() {
    if (!this.tail) return null;

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
      } else {
        currentNode = currentNode.next;
      }
    }
    this.tail = currentNode;

    return delTail;
  }

  public deleteHead() {
    if (!this.head) {
      return null;
    }
    const delHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return delHead;
  }

  public fromArray(arr: any[]) {
    for (let el of arr) {
      this.append(el);
    }
    return this;
  }

  public toArray() {
    const arr: ListNode[] = [];

    let currentNode = this.head;

    while (currentNode) {
      arr.push(currentNode);
      currentNode = currentNode.next;
    }

    return arr;
  }

  public toString(callback?: (value: any) => string) {
    return this.toArray()
      .map((node) => node.toString(callback)).toString();
  }

  public reverse() {
    let arr = this.toArray().reverse();
    return this.fromArray(arr);
  }
}

let list = new LinkedList();
//console.log(list);
console.log(list.append(123));
console.log(list.prepend('124214'));
console.log(list.append('ewrert'));
console.log(list.append('fghbng'));
//console.log(list.delete('fghbng'));
//console.log(list.find('ewrert'));
console.log(list.toArray());
//console.log(list.toString());
//console.log(list.reverse());
