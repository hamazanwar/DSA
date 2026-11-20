
class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[index] >= this.heap[parent]) {
                break;
            }

            [this.heap[index], this.heap[parent]] =
            [this.heap[parent], this.heap[index]];

            index = parent;
        }
    }

    peek() {
        return this.heap[0] ?? null;
    }

    remove() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < this.heap.length &&
                this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < this.heap.length &&
                this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] =
            [this.heap[smallest], this.heap[index]];

            index = smallest;
        }

        return min;
    }
}

const min = new MinHeap();

min.insert(10);
min.insert(5);
min.insert(20);
min.insert(2);

// console.log(min.heap);
// console.log(min.peek());
// console.log(min.remove());
// console.log(min.heap);




class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (this.heap[index] <= this.heap[parent]) {
                break;
            }

            [this.heap[index], this.heap[parent]] =
            [this.heap[parent], this.heap[index]];

            index = parent;
        }
    }

    peek() {
        return this.heap[0] ?? null;
    }

    remove() {
        if (this.heap.length === 0) return null;

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let max = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let largest = index;

            if (left < this.heap.length &&
                this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < this.heap.length &&
                this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === index) break;

            [this.heap[index], this.heap[largest]] =
            [this.heap[largest], this.heap[index]];

            index = largest;
        }

        return max;
    }
}

const max = new MaxHeap();

max.insert(10);
max.insert(5);
max.insert(20);
max.insert(2);

// console.log(max.heap);
// console.log(max.peek());
// console.log(max.remove());
// console.log(max.heap);