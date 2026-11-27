// Queue using an Array

let queue=[];
// console.log(queue);
queue.push(10);
queue.push(20);
queue.push(30);
queue.push(40);
// console.log(queue);
queue.shift();
queue.shift();
// console.log(queue);



class Queue{
    constructor(){
        this.items=[];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            return "Queue Underflow";
        }
        return this.items.shift();
    }
    peek(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length===0;
    }
    rear(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        return this.items[this.items.length-1];
    }
    size(){
        return this.items.length;
    }
    print(){
        if(this.isEmpty()){
            console.log("Queue is empty");
        }else{
            console.log("Queue: "+this.items.join(", "));
        }
    }
}

const myQueue=new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
myQueue.enqueue(40);
myQueue.print();




function MyCircularQueue(k){
    this.queue=[];
    this.size=k;
}

MyCircularQueue.prototype.enqueue=function(value){
    if(this.size===this.queue.length) return false;
    this.queue.push(value);
    return true;
}

MyCircularQueue.prototype.dequeue=function(){
    if(this.queue.length===0) return false;
    this.queue.shift();
    return true;
}

MyCircularQueue.prototype.front=function(){
    if(this.queue.length===0) return false;
    return this.queue[0];
}

MyCircularQueue.prototype.rear=function(){
    if(this.queue.length===0) return false;
    return this.queue[this.queue.length-1];
}

MyCircularQueue.prototype.isEmpty=function(){
    return this.queue.length===0;
}

MyCircularQueue.prototype.isFull=function(){
    return this.size===this.queue.length;
}

const test=new MyCircularQueue(3);
// test.enqueue(1);
// test.enqueue(2);
// test.enqueue(3);
// test.dequeue();
// test.enqueue(5);
// console.log(test.rear());
// console.log(test.isFull());
// console.log(test.front(), test.rear());