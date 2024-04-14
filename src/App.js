import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from './Constant/constant';
import Login from './Components/Login';
import Connected from './Components/Connected';
import './App.css';
import ImageSliderPage from './Components/ImageSlider';
import Testimonials from './assets/Testimonials/Testimonials';
import WebsiteViewer from './Components/WebsiteViewer';
import BlocksPayInfo from './Components/BlockspayInfo';


function App() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [votingStatus, setVotingStatus] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const [number, setNumber] = useState('');
  const [canVote, setCanVote] = useState(true);

  useEffect(() => {
    getCandidates();
    getCurrentStatus();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  async function refreshVotes() {
    getCandidates();
    updateVotingStatus();
  }

  async function updateVotingStatus() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
      const voteStatus = await contractInstance.voters(await signer.getAddress());
      setCanVote(voteStatus);
    } catch (error) {
      console.error('Error while checking voting status:', error);
    }
  }

  async function getCandidates() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
      const candidatesList = await contractInstance.getAllVotesOfCandidates();

      const formattedCandidates = candidatesList.map((candidate, index) => ({
        index: index,
        name: candidate.name,
        voteCount: candidate.voteCount.toNumber(),
      }));
      setCandidates(formattedCandidates);
    } catch (error) {
      console.error('Error while getting candidates:', error);
    }
  }

  async function getCurrentStatus() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);
      const status = await contractInstance.getVotingStatus();
      console.log('Voting status:', status);
      setVotingStatus(status);
    } catch (error) {
      console.error('Error while getting voting status:', error);
    }
  }

  function handleAccountsChanged(accounts) {
    if (accounts.length > 0 && account !== accounts[0]) {
      setAccount(accounts[0]);
      updateVotingStatus();
    } else {
      setIsConnected(false);
      setAccount(null);
    }
  }

  async function connectToBlocksPay() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);
        await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        console.log('BlocksPay Connected:', address);
        setIsConnected(true);
        updateVotingStatus();
      } catch (error) {
        console.error('Error while connecting to BlocksPay:', error);
      }
    } else {
      console.error('BlocksPay is not detected in the browser');
    }
  }

  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  async function vote() {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send('eth_requestAccounts', []);
      const signer = provider.getSigner();
      const contractInstance = new ethers.Contract(contractAddress, contractAbi, signer);

      const tx = await contractInstance.vote(number);
      await tx.wait();

      // After voting, update the candidates and user's voting status
      refreshVotes();
    } catch (error) {
      console.error('Error while voting:', error);
    }
  }

  return (
    <div className="App">
      {votingStatus && isConnected ? (
        <Connected
          account={account}
          candidates={candidates}
          number={number}
          handleNumberChange={handleNumberChange}
          voteFunction={vote}
          showButton={canVote}
          refreshVotes={refreshVotes}
        />
      ) : (
        <><Login connectWallet={connectToBlocksPay} /><ImageSliderPage /><BlocksPayInfo/>  <WebsiteViewer url="https://poe.com" /><Testimonials/></>
      )}
    </div>
  );
  
}

export default App;
