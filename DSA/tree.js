class TreeNode{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

const a=new TreeNode("10");
const b=new TreeNode("20");
const c=new TreeNode("30");
const d=new TreeNode("40");
const e=new TreeNode("50");
const f=new TreeNode("60");

a.left=b;
a.right=c;
b.left=d;
b.right=e;
c.left=f;

let root=a;

// console.log(root);
// console.log(a);
// console.log(c);

function inorder(root) {
    if (root === null) {
        return;
    }
    inorder(root.left);
    console.log(root.value);
    inorder(root.right);
}
// inorder(root);

function preorder(root) {
    if (root === null) {
        return;
    }
    console.log(root.value);
    preorder(root.left);
    preorder(root.right);
}
// preorder(root);

function postorder(root) {
    if (root === null) {
        return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root.value);
}
// postorder(root);



class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(data){
        const newNode=new TreeNode(data);
        if(this.root===null){
            this.root=newNode;
            return;
        }
        let current=this.root;
        while(true){
            if(data<current.value){
                if(current.left===null){
                    current.left=newNode;
                    return;
                }
                current=current.left;
            }else if(data>current.value){
                if (current.right === null) {
                    current.right = newNode;
                    return;
                }
                current=current.right;
            }else{
                return;
            }
        }
    }
}

const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

// console.log(bst.root.value);
// console.log(bst.root.left.value);
// console.log(bst.root.right.value);

// console.log(bst.root.value);
// console.log(bst);
// console.log(bst.root.left.right.value);



//      deletion