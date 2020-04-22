
/* 
index: to know block number
timestamp: to know time of creation
previous hash: hash of previous block
hash: hash of current block

this: "this" keyword is invoked inside a function and enables you to
access values inside a specific object that calls that particular func

constructor: special func that can help you create and initialize an
object w/i a class. each class restricted to only ONE constructor
*/

// called crypto-js library b/c sha256 hash func not available in JS
const SHA256 = require("crypto-js/sha256"); 

class Block {

    // invoke constructor inside class to call for objects which will
    // have certain values
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = this.calculateHash();
    }

    // in a block, we take all contents and hash them to get the hash
    // of that particular block.
    // we are using JSON.stringify func to turn data of the block into
    // a string to has it.
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + 
            JSON.stringify(this.data)).toString();
    }
}

