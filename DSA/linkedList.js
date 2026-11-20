class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }

    addFirst(data){
        const newNode=new Node(data);
        newNode.next=this.head;
        this.head=newNode;
    }

    addLast(data){
        const newNode=new Node(data);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let current=this.head;
        for(;current.next;){
            current=current.next;
        }
        current.next=newNode;
    }

    size(){
        let count=0;
        let current=this.head;
        while(current){
            count++;
            current=current.next;
        }
        return count;
    }

    addAt(index,data){
        if(index<0||index>this.size()){
            console.error("invalid index");
            return;
        }
        const newNode=new Node(data);
        if(index===0){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        newNode.next=current.next;
        current.next=newNode;
    }

    removeTop(){
        if(!this.head){
            return;
        }
        this.head=this.head.next;
    }

    removeLast(){
        if(!this.head){
            return;
        }
        if(!this.head.next){
            this.head = null;
            return;
        }
        let current=this.head;
        for(;current.next.next;){
            current=current.next;
        }
        current.next=null;
    }

    removeAt(index){
        if(index<0||index>=this.size()){
            console.error("invalid index");
            return;
        }
        if(index===0){
            this.head=this.head.next;
            return;
        }
        let current=this.head;
        for(let i=0;i<index-1;i++){
            current=current.next;
        }
        current.next=current.next.next;
    }

    print(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
}

const f1=new LinkedList();

f1.addFirst(1);
f1.addFirst(2);
f1.addFirst(3);
f1.addLast(7);
f1.addLast(8);
f1.addLast(9);
f1.addAt(3,100);
f1.removeAt(3);
f1.removeLast();
f1.removeTop();

f1.print();
console.log("size: "+f1.size());