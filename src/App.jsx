import { useState } from "react";
import ConnectWallet from "./components/Wallet";
import IBT from "./components/Contract";

const App = () =>
  {
  const [walletAddress, setWalletAddress] = useState("");
  const contractAddress = "***";

  return (
    <div>
      <h1>IBT Bridge</h1>
      <ConnectWallet onConnect={setWalletAddress} />
      {walletAddress && (
        <IBT contractAddress={contractAddress} walletAddress={walletAddress} />
      )}
    </div>
  );
};

export default App;
