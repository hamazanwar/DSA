const hashTable = new Map();

//      set()
hashTable.set("name", "hamaz");
hashTable.set("age", 19);
hashTable.set("course", "full stack development");
hashTable.set(10, "hello");
hashTable.set("name", "HMZ");

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

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total = total + key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "anwar");
table.set("age", 22);
// table.remove("age");
console.log(table.get("name"));
table.print();

function hash(key, tableSize) {
  let sum = 0;
  for (let i = 0; i < key.length; i++) {
    sum = sum + key.charCodeAt(i);
  }
  return sum % tableSize;
}

// console.log(hash("cat", 10));
// console.log(hash("tac", 10));
// console.log(hash("dog", 10));
// console.log(hash("apple", 10));
// console.log(hash("cat", 10));

class HashTable1 {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.table[index]) {
      this.table[index] = [];
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }

    this.table[index].push([key, value]);
  }

  get(key) {
    const index = this.hash(key);

    if (!this.table[index]) {
      return undefined;
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }
  }

  remove(key) {
    const index = this.hash(key);

    if (!this.table[index]) {
      return;
    }

    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        return;
      }
    }
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

// const ht = new HashTable1(5);

// ht.set("name", "Hamaz");
// ht.set("age", 22);
// ht.set("mane", "Developer");
// ht.set("name", "Anwar");

// console.log(ht.get("name")); // Anwar
// console.log(ht.get("age"));  // 22
// console.log(ht.get("mane")); // Developer

// ht.print();

// ht.remove("age");

// console.log(ht.get("age")); // undefined


