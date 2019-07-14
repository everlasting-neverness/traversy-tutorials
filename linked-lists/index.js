class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //Insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    // If empty, make head
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  // Insert at index
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      return this.insertFirst(data);
    }

    const node = new Node(data);
    let current, previous, count = 0;

    current = this.head;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }

    node.next = current;
    previous.next = node;
    this.size++;
  }

  // Get at index
  getAt(index) {
    let current = this.head,
        count = 0;
    while (current) {
      if (count === index) {
        console.log(current.data);
        return current;
      }
      count++;
      current = current.next;
    }

    return;

  }

  // Remove at index
  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current = this.head, previous, count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }

    this.size--;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }


  // Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(1);
ll.insertFirst(2);
ll.insertLast(5);

ll.insertAt(100, 1);

ll.printListData();

ll.getAt(2);

console.log('----------');

ll.removeAt(0);

ll.printListData();

console.log('----------');

ll.clearList();

ll.printListData();
