import { useState } from "react";

const ConnectWallet = ({ onConnect }) => {
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
        onConnect(accounts[0]);
    }
  };

  return (
    <div>
      {walletAddress ? (<p>Connected: {walletAddress}</p>) 
      : 
      (<button onClick={connectWallet}>Connect Wallet</button>)}
    </div>
  );
};

export default ConnectWallet;
