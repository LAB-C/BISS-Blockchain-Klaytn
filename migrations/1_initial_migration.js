var Migrations = artifacts.require("./Migrations.sol");
var Biss = artifacts.require("./Biss.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Biss);
};
