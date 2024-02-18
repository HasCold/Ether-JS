import { useEffect } from "react";
import { walletABI } from "./utility/ABI_Code" 
// const {ethers} = require("ethers");
import {ethers} from "ethers";

function App() {
const walletAddress = "0xec50750f30fb513c7e5e7fe4f77f6eec2f024a2e"

// Metamask is also using Infura behind the scene that why we don't need to write Infura 
  const writeContract = async () => {  
    const provider = new ethers.BrowserProvider(window.ethereum);  // Metamask ye code inject krta ha apke browser ma take ap sare operations perform krsko
    await provider.send("eth_requestAccounts", []);   // Through this line Metamask will open automatically
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, walletABI, signer);
  
      // Now simply we can call any write operation function through the contract
      // await contract.setValue(3);

      // await contract.sendEtherContract({value: ethers.parseEther("0.1")});

      await contract.senEtherUser("0xa43041C8E15CE93A215522DC1F124964f8b75109", {value: ethers.parseEther("0.1")});
    
    }

    useEffect(() => {
      writeContract();
    }, []);

    const connectWallet = async () => {
      try {
        await writeContract();
      } catch (error) {
        console.error(error);
      }
    }

  return (
    <>
  <h1>Hello World</h1>
  <button onClick={connectWallet}>Connect MetaMask Wallet</button>
    </>
  )
}

export default App
