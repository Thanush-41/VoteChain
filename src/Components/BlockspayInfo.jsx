import React from 'react';
import './BlockspayInfo.css'; // Import the CSS file for styling
import bg1 from './blockspay.png'
import bg2 from './xdc.png'
import bg3 from './truffle.png'
import bg4 from './solidity.png'

const BlocksPayInfo = () => {
  return (
    <div className="blockspay-info-container">
      <h2 className="blockspay-info-title">Function of BlocksPay</h2>
      <div className="blockspay-info-content">
        <p>
          BlocksPay is a blockchain-based payment platform that facilitates secure <br></br>and transparent transactions.
          It enables users to send and receive<br></br> payments globally without the need for intermediaries such as banks.
        </p>
        <p>
          With BlocksPay, businesses can accept payments in various <br></br>cryptocurrencies, providing flexibility
          and accessibility to their customers.
        </p>
      </div>
      <div className="blockspay-info-image-holder">
        {/* Replace the src attribute with the URL of your image */}
        <img
          src={bg1}
          alt="BlocksPay Function"
          className="blockspay-info-image"
        />
      </div>
    </div>
  );
}

const XDCNetworkInfo = () => {
  return (
    <div className="blockspay-info-container">
      <h2 className="blockspay-info-title">Function of XDC Network</h2>
      <div className="blockspay-info-content">
        <p>
          XDC Network is a hybrid blockchain technology and is a <br></br>part of XinFin's suite of enterprise solutions.
        </p>
        <p>
          It's designed for global trade and finance, offering fast,<br></br> scalable, and secure transactions for businesses.
        </p>
      </div>
      <div className="blockspay-info-image-holder">
        {/* Replace the src attribute with the URL of your image */}
        <img
          src={bg2}
          alt="XDC Network Function"
          className="blockspay-info-image"
        />
      </div>
    </div>
  );
}

const TruffleInfo = () => {
  return (
    <div className="blockspay-info-container">
      <h2 className="blockspay-info-title">Function of Truffle</h2>
      <div className="blockspay-info-content">
        <p>
          Truffle is a popular development environment, testing framework,<br></br> and asset pipeline for Ethereum, aiming to make life easier for developers.
        </p>
        <p>
          It provides tools for compiling contracts, deploying them to the<br></br> blockchain, and testing them with a built-in testing framework.
        </p>
      </div>
      <div className="blockspay-info-image-holder">
        {/* Replace the src attribute with the URL of your image */}
        <img
          src={bg3}
          alt="Truffle Function"
          className="blockspay-info-image"
        />
      </div>
    </div>
  );
}

const SolidityInfo = () => {
  return (
    <div className="blockspay-info-container">
      <h2 className="blockspay-info-title">Function of Solidity</h2>
      <div className="blockspay-info-content">
        <p>
          Solidity is a high-level programming language used for implementing smart <br></br>contracts on various blockchain platforms, primarily Ethereum.
        </p>
        <p>
          It's statically typed and supports inheritance, libraries, and <br></br>complex user-defined types.
        </p>
      </div>
      <div className="blockspay-info-image-holder">
        {/* Replace the src attribute with the URL of your image */}
        <img
          src={bg4}
          alt="Solidity Function"
          className="blockspay-info-image"
        />
      </div>
    </div>
  );
}

const BlocksPayInfoGroup = () => {
  return (
    <div className="blockspay-info-group">
      {/* Display multiple instances of different info components */}
      <BlocksPayInfo />
      <XDCNetworkInfo />
      <TruffleInfo />
      <SolidityInfo />
    </div>
  );
}

export default BlocksPayInfoGroup;
