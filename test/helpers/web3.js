const { transactionMined } = require('./transactionMined');
const pify = require('pify');

const ethAsync = pify(web3.eth);

async function ethSendTransaction (...args) {
  const txHash = await ethAsync.sendTransaction(...args);
  await transactionMined(txHash);
  return txHash;
}

module.exports = {
  ethGetBalance: ethAsync.getBalance,
  ethSendTransaction,
  ethGetBlock: ethAsync.getBlock,
};
