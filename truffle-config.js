require('chai/register-should');

const solcStable = {
  version: '0.5.7',
};

const solcNightly = {
  version: 'nightly',
  docker: true,
};

const useSolcNightly = process.env.SOLC_NIGHTLY === 'true';

truffleOptions = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gas: 0xfffffffffff,
      gasPrice: 0x01,
    },
    rsk: {
      host: 'localhost',
      port: 4444,
      network_id: '*', // eslint-disable-line camelcase
    },
  },

  compilers: {
    solc: useSolcNightly ? solcNightly : solcStable,
  },
};

if (process.argv.includes('--ci')) {
  truffleOptions.mocha = {
    reporter: "mocha-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mocha-junit-reporter, spec",
    },
  };
}

module.exports = truffleOptions
