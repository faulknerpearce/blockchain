// Represents a single node in the Trie.
class TrieNode{
    constructor(key){
        this.key = key;
        this.children = {};
        this.isWord = false
    }
}

module.exports = TrieNode;