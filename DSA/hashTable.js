const hashTable=new Map();

//      set()
hashTable.set("name", "hamaz");
hashTable.set("age",19);
hashTable.set("course", "full stack development");
hashTable.set(10,"hello");
hashTable.set("name","HMZ");

// console.log(hashTable);

//      get()
// console.log(hashTable.get("name"));
// console.log(hashTable.get("course"));

//      has()
// console.log(hashTable.has("name"));
// console.log(hashTable.has("email"));

//      delete()
hashTable.delete("course");

// console.log(hashTable);
// console.log(hashTable.size);


class HashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total=total+key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key ,value){
        const index=this.hash(key);
        this.table[index]=value;
    }
    get(key){
        const index=this.hash(key);
        return this.table[index];
    }
    remove(key){
        const index=this.hash(key);
        this.table[index]=undefined;
    }
    print(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

const table=new HashTable(50);

table.set("name","anwar");
table.set("age",22);
// table.print();
table.remove("age");
// console.log(table.get("name"));
// table.print();