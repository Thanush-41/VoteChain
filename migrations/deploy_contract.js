const Voting = artifacts.require("Voting");
//array of exchang app for xdc
module.exports = function(deployer) {
  deployer.deploy(Voting, ["uphold", "CoinDCX", "IceCreamSwap", "CoinEx", "bitrue"]);
};
