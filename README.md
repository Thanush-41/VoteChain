
**********This is the simple decentralized voting application built on XDCNetwork***********
***Requirements***

Operating System:- Windows

Node js:- 18.12.1

Truffle:- 5.11.2

Wallet extension installed:- BlocksPay(https://chrome.google.com/webstore/detail/blockspay-secure-multiple/pogabilnghhbafaheaepaaeopjpleimd)

RPC Details:-https://medium.com/@tivan7404/setting-up-metamask-for-xdc-network-using-blocksscan-ethereum-compatible-rpc-f3aebf27c9cd

Fund your account:- 
You should have some xdc in your account to deploy contract and to do a transaction you can use BlocksScan’s faucet to request funds.
https://faucet.blocksscan.io/

Step by step guidance
1- setup truffle in your project directory "npm install -g truffle"

2- check if you have properly installed truflle "truffle -v"

3- run "truffle init" to setup truffle.(
   this command will made three folders contracts(in which you will save your contract file),
   migrate(you will write deploy script in it),
   truffle-config.js(to store configuration like chain id, rpc url).
   test(where you can write code for testing).
   )

4- install dotenv pacakge to securely save your private key "npm install dotenv --save" and then create .env in you root direcotory and save your private key in it.

5- write your code in contracts/Voting.sol

6- define configuration for you network in truffle-config.js(like api url ,chain id, soliditity version)

7- run "truffle compile" (This will generate a build folder from where you will get the abi code .
)

8- write deploy script /migrate/1_deploy_contract.js(change the array values if you want).

9- run "truffle migrate --network apothem" to deploy your contract.

10- make UI that will interact with your code.

11- see the video for more clearification.