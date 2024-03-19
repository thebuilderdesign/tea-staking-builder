const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'awesome pear drive venture sign toast tide much hundred floor adapt attend';

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
    alfajores: {
      provider: function() {
        return new HDWalletProvider(mnemonic,'https://alfajores-forno.celo-testnet.org');
      },
      network_id: 44787, // The network ID for Alfajores testnet
      gas: 4500000, // Gas limit used for deployments
      gasPrice: 10000000000, // Gas price used for transactions
      skipDryRun: true // Skip the dry run before migrations? (default: false for public nets )
    }
  },

  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.19", // Fetch exact version from solc-bin (default: truffle's version)
    },
  },

  // plugin for verification
  plugins: ['truffle-plugin-verify'],

  api_keys: {
    alfajores: process.env.CELO_ALFAJORES_API_KEY // Celo Alfaajores testnet API key
    
  }
};