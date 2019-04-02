class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty () {
        return this.head === null && this.tail === null;
    };

    size() {
        var current = this.head;
        var count = 0;

        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    };

    prepAdd (val) {
        var newNode = {
            data: val,
            next: null,
            prev: null
        };

        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

    };

    append (val) {
        var newNode = {
            data: val,
            prev: null,
            next: null
        };

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        var current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
        newNode.prev = current;

        this.tail = newNode;
    };

    contains (val) {
        var current = this.head;
        while (current !== null) {
            if (current.data === val) {
                return true;
            }
        current = current.next;
        }
    
        return false;
    };

    remove (val) {
        if (!this.contains(val)) {
            return;
        }

        if (this.head.data === val) {
            this.head = this.head.next;
            return;
        }

        var prev = null;
        var current = this.head;

        while (current.data !== val) {
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
    };

    print () {
        var out = '[ '
        var current = this.head;

        while (current !== null) {
            out += current.data;
            if (current.next !== null) {
                out += ', '
            }
            current = current.next;
        }
        out += ' ]'
    
        return out;
    };

    headP () {
        return this.head.data;
    };

    tailP () {
        return this.tail.data;
    };
}










var list = new LinkedList();
list.append(2);

console.log(list);
console.log(list.isEmpty());

list.prepAdd(1);
list.append(3);
list.append(4);
list.append(5);
list.prepAdd(0);

console.log(list);

console.log(list.print());
console.log(list.contains(2));
console.log(list.size());

console.log('_________________________');

console.log(list.headP());
console.log(list.tailP());




