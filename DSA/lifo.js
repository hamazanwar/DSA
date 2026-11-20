// Stack using an Array

let stack=[];
// console.log(stack);
// console.log(stack.pop());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// console.log(stack);
// console.log(stack.pop());
stack.pop();
stack.pop();
stack.pop();
// console.log(stack);
// console.log(stack[stack.length-1]);
let topElement=stack[stack.length-1];
stack.pop();
// console.log(stack);
// console.log(topElement);
// console.log(stack.length);


// Stack using a JavaScript Class

class Stack{
    constructor(){
        this.items=[];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "stack underflow";
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "stack is empty";
        }
        return this.items[this.items.length-1];
    }
    isEmpty(){
        return this.items.length===0;
    }
    size(){
        return this.items.length;
    }
    display(){
        return this.items;
    }
}
let stackk=new Stack();
stackk.push(10);
stackk.push(20);
stackk.push(30);
stackk.push(40);
stackk.push(50);
stackk.pop();
// console.log(stackk.peek());
// console.log(stackk.isEmpty());
// console.log(stackk.size());
// console.log(stackk.display());



let undoStack = [];
undoStack.push("Type Hello");
undoStack.push("Type World");
undoStack.push("Change Font Size");
undoStack.push("Change Text Color");
// console.log(undoStack);
// console.log(undoStack.pop());
// console.log(undoStack.pop());
// console.log(undoStack);
// Change Text Color


function first() {
    console.log("First Start");
    second();
    console.log("First End");
}
function second() {
    console.log("Second Start");
    third();
    console.log("Second End");
}
function third() {
    console.log("Third Start - End");
}
// first();



let str="HAMAZ";
let stackkk=[];
for(let i=0;i<str.length;i++){
    stackkk.push(str[i]);
}
let reversed="";
for(;stackkk.length>0;){
    reversed=reversed+stackkk.pop();
}
// console.log(reversed);


const isBalanced=(str)=>{
    let stack=[];
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(char==="["||char==="{"||char==="("){
            stack.push(char);
        }
        else{
            if(stack.length===0){
                return false;
            }
            let top=stack.pop();
            if(
                (char==="]"&&top!=="[")||
                (char==="}"&&top!=="{")||
                (char===")"&&top!=="(")
            ){
                return false;
            }
        }
    }
    return stack.length===0;
}
// console.log(isBalanced("[{()}]"));
// console.log(isBalanced("[{()]}"));