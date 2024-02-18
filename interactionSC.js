
const {ethers} = require("ethers");  
const provider = new ethers.JsonRpcProvider("https://sepolia.infura.io/v3/6a10424f5c524590a79419e129c80526"); // Infura Sepolia Network
const walletAddress = "0xec50750f30fb513c7e5e7fe4f77f6eec2f024a2e"
const walletABI = require("./ABI_Code");

const contractInteraction = async () => {
    const walletContract = new ethers.Contract(walletAddress, walletABI, provider);

    // Below are all the Read Operations which we get from the blockchain 

    const contractName = await walletContract.name();
    console.log("Contract Name :-", contractName);

    const num = await walletContract.getValue();
    console.log("Num :-", Number(num));

    const contractbalance = await walletContract.contractBalance();
    const ethBalance = ethers.formatEther(contractbalance);
    console.log("Eth Balance of contract :-", ethBalance);

    const userBalance = await walletContract.accountBalance("0x59f4E786Edb7580C0E13527Dafca9Cdc22301927");
    const ethUserBalance = ethers.formatEther(userBalance);
    console.log("Eth user balance :- ", ethUserBalance);
}

contractInteraction();