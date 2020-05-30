class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count += 1;
        return this.count - 1;
    }

    pop() {
        if (this.count === 0) return;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    peek() {
        let peekedItem = this.items[this.count - 1];
        console.log(`Top element is ${peekedItem}`);
        return peekedItem;

    }

    isEmpty() {
        const isEmpty = this.count === 0;
        console.log(isEmpty ? 'Stack is empty' : 'Stack is not empty');
        return isEmpty;
    }

    size() {
        console.log(`${this.count} elements in stack`);
        return this.count;
    }

    print() {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }

    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared');
        return this.items;
    }
}

const stack = new Stack();

stack.push(100);
stack.push(200);

stack.peek();

stack.push(300);

stack.isEmpty();

stack.size();

stack.pop();

console.log(stack.print());

stack.clear();