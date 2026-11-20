
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word
    insert(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }

            current = current.children[char];
        }

        current.isEnd = true;
    }

    // Search a word
    search(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }

            current = current.children[char];
        }

        return current.isEnd;
    }

    // Check whether a prefix exists
    startsWith(prefix) {
        let current = this.root;

        for (let char of prefix) {
            if (!current.children[char]) {
                return false;
            }

            current = current.children[char];
        }

        return true;
    }
}

const trie = new Trie();

trie.insert("cat");
trie.insert("car");
trie.insert("dog");

// console.log(trie.search("cat"));
// console.log(trie.search("car"));
// console.log(trie.search("cap"));
// console.log(trie.startsWith("ca"));
// console.log(trie.startsWith("do"));
// console.log(trie.startsWith("xy"));