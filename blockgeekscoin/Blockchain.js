class Blockchain {
    
    /*section 1: genesis block creation
    - genesis block is first block of blockchain
    - every block points back to block previous to it, genesis block
    does not have anything to point to
    - the moment a new chain is created => genesis block invoked immediately
    */
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, "01/01/2020", "Genesis Block", "0"); 
        // manually created new block
    }

    /*section 2: adding new blocks
    - to add new block, need to know what last block in blockchain currently is
    - compare previous hash value of new block w/ hash value of latest block
    - every block in blockchain contains HASH OF PREVIOUS BLOCK'S DATA
    - ensures chain remaines IMMUTABLE b/c any change in block's data will
    INVALIDATE every block that follows it
    */
    getLatestBlock() {
        return this.chain[this.chain.length-1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    /* section 3: validate chain
    */
    isChainValid() {
        
        // use for loop to go from block 1 to last block, genesis block is block 0
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            
            // if previousHash of current block not equal to Hash of previous block,
            // function will return F, otherwise T
            if (currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}