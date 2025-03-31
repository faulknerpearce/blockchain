const TrieNode = require('./TrieNode');

// Represents a Trie data structure for storing and searching words.
class Trie{
    constructor(){
        this.root = new TrieNode(null);
    }

    // Inserts a word into the Trie.
    insert(word){
        let node = this.root;

        for(let ltr of word){

            if(!node.children[ltr]){
                node.children[ltr] = new TrieNode(ltr);
            }
            node = node.children[ltr];
        }

        node.isWord = true;
    }

    // Checks if the Trie contains a specific word.
    contains(word){
        let node = this.root;

        for(let ltr of word){
            node = node.children[ltr]

            if(!node){
                return false;
            }
        }

        return node.isWord
    }
}

function main(){

    const trie = new Trie();

    trie.insert('test_one');
    trie.insert('test_two');

    const answer = trie.contains('test_one')

    console.log(answer)
}

main();

