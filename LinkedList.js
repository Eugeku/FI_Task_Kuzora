class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
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

    prepAdd(val) {
        var newNode = {
            data: val,
            next: null,
            prev: null
        };
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;

    };

    append(val) {
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

    insertAt(index, val) {
        var current = this.head;
        var iterator = 0;
        var newNode = {
            data: val,
            prev: null,
            next: null
        };
        if (index < 0 || index > this.size()) {
            this.append(val);
            return;
        }
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        if (index === 0) {
            newNode.next = current
            current.next.prev = newNode;
            current.prev = newNode;
            this.head = newNode
            return;
        }
        if (this.size() === index ) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
            return;
        }
        while (current.next !== null) {
            if (iterator + 1 === index) {
                break;
            }
            current = current.next;
            iterator++;
        }
        newNode.next = current.next;
        newNode.prev = current;
        current.next.prev = newNode;
        current.next = newNode;
    };

    contains(val) {
        var current = this.head;
        while (current !== null) {
            if (current.data === val) {
                return true;
            }
        current = current.next;
        }
        return false;
    };

    clear() {
        this.head = null;
        this.tail = null;
    };

    deleteAt(index) {
        var prev = null;
        var current = this.head;
        var counter = 0;

        while (current !== null) {
            if (counter !== index) {
                prev = current;
            } else {
                if (current.prev === null) {
                    this.head = current.next;
                    this.head.prev = null;
                    return;
                }
                if (current.next === null) {
                    this.tail = prev;
                    this.tail.next = null;
                    return;
                }
                if (prev !== null && this.size() > 1) {
                    prev.next = current.next; 
                    current.next.prev = current.prev;
                    return;
                } else {
                    this.clear();
                    return;
                }
            }
            current = current.next;
            counter++;
        }
    };

    at(index) {
        var current = this.head;
        var counter = 0;
        while (current !== null) {
            if (counter === index) {
                return current.data;
            }
            current = current.next;
            counter++;
        }
        return null;
    };

    removeAll(val) {
        var prev = null;
        var current = this.head;
        if (!this.contains(val)) {
            return;
        }
        while (current !== null) {
            if (current.data !== val) {
                prev = current;
            } else {
                if (current.prev === null) {
                    this.head = current.next;
                    this.head.prev = null;
                }
                if (current.next === null) {
                    this.tail = prev;
                    this.tail.next = null;
                    return;
                }
                if (prev !== null && this.size() > 1) {
                    prev.next = current.next; 
                    current.next.prev = current.prev;
                } else {
                    this.clear();
                    return;
                }
            }
            current = current.next;
        }
    };

    indexOf(val) {
        var out = [];
        var current = this.head;
        var index = 0;
        while (current !== null) {
            if (current.data === val) {
                out.push(index);
            }
            current = current.next;
            index++;
        }
        return out;
    };

    reverse() {
        var current = this.tail;
        var h = null;
        while (current !== null) {
            h = current.prev;
            current.prev = current.next;
            current.next = h;
            if (current.prev === null) {
                this.head = current;
            }
            if (current.next === null) {
                this.tail = current;
            }
            current = h;
        }
    };

    print() {
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

    headP() {
        if (!this.isEmpty()) {
            return this.head.data;
        }
        return null;
    };

    tailP() {
        if (!this.isEmpty()) {
            return this.tail.data;
        }
        return null;
    };
}