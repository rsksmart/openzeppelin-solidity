const { transactionMined } = require('./transactionMined');
const should = require('chai')
  .should();

async function assertRevert (promise) {
  let txHash;
  try {
    txHash = await promise;
  } catch (error) {
    error.message.should.include('revert', `Expected "revert", got ${error} instead`);
    return;
  }

  // TODO: This doesn't distinguish between throw and revert.
  //       It should be improved once debug_traceTransaction is implemented.
  txHash = txHash.transactionHash || txHash;
  // TODO: change RSKj behavior to match Ganache's and Parity's
  //       and return an RPC error on REVERT.
  //       see https://github.com/paritytech/parity-ethereum/pull/8448.
  txHash.should.be.a("string", "TODO: skip test for now");
  txHash.should.have.lengthOf(66, "TODO: skip test for now");
  const txReceipt = await transactionMined(txHash);
  txReceipt.should.have.property("status", "0x00");
}

module.exports = {
  assertRevert,
};
