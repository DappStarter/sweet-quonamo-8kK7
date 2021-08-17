require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe strike rival sad slow hope kangaroo army giggle'; 
let testAccounts = [
"0x7eba7dde7ad486612ded92c0e8a75f27ce637dfde93bdb3d2de5b1b60f5f8d85",
"0xaf8621a7510d30ac17b371c82562cdcb081f8329e8c8a579b14edbde4fd363b8",
"0x706d4cfee6847cb86b83fadd20f77ebff84cac9f1855f0390611113c581d79ec",
"0x1ecb8f6ccc1e605dd4e58be2f17a88a5771cd4808c1b1acd46198fba1c1f1cdc",
"0x38986f6ac038c2ebe024cf50ac91461b170264be9c8a9f1d033a517295567f38",
"0x1d7485d1308f29df8159f13b6ab243addfc5d813222367b257e07fb7ac71dfda",
"0x4e5784fca39f17efcca402964c187aa4d053fa76be63d46494784c6745b1fea3",
"0x8a50a565b4594e93ab62374b2351a80a2d18f9e78b6f3fd481b01be6a7ec920b",
"0x9eeaaeb8af77debefbe8b4b8a377205f6d4db43437f9b9cff185303e5193816f",
"0x62c764fb31579521e748ccffa5a9142e61e9643bcc6eac94cee974e2cace34f6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

