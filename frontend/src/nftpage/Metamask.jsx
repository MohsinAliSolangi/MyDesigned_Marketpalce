import React, { useEffect } from 'react';
import { useState } from 'react'
import { ethers } from "ethers-providers";
// import { ethers } from "ethers" // good
import { marketplaceAddress,marketplaceAbi,NFTAddress,NFTAbi} from '../market/index';
import { Spinner } from 'react-bootstrap'


const Metamask = () => {
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const { ethereum } = window;

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccountAddress(accounts[0]);
    window.ethereum.on("accountsChanged", async (accounts) => {
        setAccountAddress(accounts[0]);
        await connectWallet();
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
    }
  };
    return ( 

      <>
      {isConnected ?
    <div className='gpt3__wahtGPT3-wallet'>
      <button>
      {accountAddress?.slice(0, 5)}...{accountAddress?.slice(accountAddress.length - 4)}
      </button>
    </div>  
:  <div className='gpt3__wahtGPT3-sign'>
    <button onClick={connectWallet}>Connect Wallet</button>
    </div> 
    }
    </>    
    )
}

export default Metamask
