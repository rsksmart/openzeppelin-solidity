const shouldBehaveLikeUpgradeableProxy = require('./UpgradeableProxy.behaviour');
const shouldBehaveLikeTransparentUpgradeableProxy = require('./TransparentUpgradeableProxy.behaviour');

const TransparentUpgradeableProxy = artifacts.require('TransparentUpgradeableProxy');

contract.skip('TransparentUpgradeableProxy', function (accounts) {
  const [proxyAdminAddress, proxyAdminOwner] = accounts;

  const createProxy = async function (logic, admin, initData, opts) {
    return TransparentUpgradeableProxy.new(logic, admin, initData, opts);
  };

  shouldBehaveLikeUpgradeableProxy(createProxy, proxyAdminAddress, proxyAdminOwner);
  shouldBehaveLikeTransparentUpgradeableProxy(createProxy, accounts);
});