const fs = require('fs');
const path = require('path');

usePlugin('solidity-coverage');
usePlugin('@nomiclabs/buidler-truffle5');

for (const f of fs.readdirSync(path.join(__dirname, 'buidler'))) {
  require(path.join(__dirname, 'buidler', f));
}

module.exports = {
  networks: {
    buidlerevm: {
      blockGasLimit: 10000000,
      host: "127.0.0.1",     // Localhost (default: none)
      port: 4444
    },
  },
  solc: {
    version: '0.6.12',
  },
};
