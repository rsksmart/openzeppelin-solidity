const { transactionMined } = require('./transactionMined');
const should = require('chai')
  .should();

async function expectThrow (promise, message) {
  let txHash;
  try {
    txHash = await promise;
  } catch (error) {
    // Message is an optional parameter here
    if (message) {
      error.message.should.include(message, 'Expected \'' + message + '\', got \'' + error + '\' instead');
      return;
    } else {
      // TODO: Check jump destination to destinguish between a throw
      //       and an actual invalid jump.
      // TODO: When we contract A calls contract B, and B throws, instead
      //       of an 'invalid jump', we get an 'out of gas' error. How do
      //       we distinguish this from an actual out of gas event? (The
      //       ganache log actually show an 'invalid jump' event.)
      error.message.should.match(/[invalid opcode|out of gas|revert]/, 'Expected throw, got \'' + error + '\' instead');
      return;
    }
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
  expectThrow,
};
