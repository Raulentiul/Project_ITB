import { useState } from "react";
import { ethers } from "ethers";
import IBT_ABI from "../abi/IBT.json";

const IBT = ({ contractAddress, walletAddress }) => {
  const [contract, setContract] = useState(null);
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [totalSupply, setTotalSupply] = useState("");
  const [mintAddress, setMintAddress] = useState("");
  const [mintAmount, setMintAmount] = useState("");

};

export default IBT;
