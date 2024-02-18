// Imporatant Thing :- If you want to become the part of blockchain eco-system so then you must be a Node. So for this thing first we have to install the GETH on our system and runs it on the system because it a very length and time taking process so we have another option we can use the Infura(runs many node) through which we can communicate and become our system as a node with the help of Infura    

const {ethers} = require ("ethers");
const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/6a10424f5c524590a79419e129c80526");  // INfura mainnet network

const queryBlockchain = async () => {
    const block = await provider.getBlockNumber();    // Current Block Number i.e. Height  == 19249522
    // console.log(block);  // You can verify on the etherscan.io  

    const balance = await provider.getBalance("0x01087f4e1dbc0c52690A9397677dD90983711c37");
    console.log(typeof balance);

    const balanceEther = ethers.formatEther(balance);
    console.log(balanceEther);
    
    const balanceInWei = ethers.parseEther(balanceEther);
    console.log("The balance in Wei :-", balanceInWei);
}

queryBlockchain();