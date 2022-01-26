require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn purity install nasty fold spirit'; 
let testAccounts = [
"0x4889fefa207b4d7619252ed879a92ce5ca44ff0e623f684bca91a5dc33114d40",
"0xcbe3ef7b3d6c7174715cd9028df6dad27820a5f05723c8da348542de50cb447d",
"0x10139365b524b43928022a0a78b1a7fe31464dc9132b755ee5779ec28ebc88ef",
"0xddda1fcd30f491b945dd25c394a4a11e1fe67f8bd10e0261ae161cf56c985eca",
"0xa0008a5f5d85831c7c4aac00aeea7601d44c25d8990768cfd1633fa9c5ee5bc1",
"0xc808ae2b6fb4fa737a775e94258c734eb69b6d24973be351dfd25f26f6e5d74c",
"0x2cce036eb09eee1925faf0322ed0e4ca7c8958c6e109d12edbe7ea40decc9071",
"0xf0c778c649ca608c6a2d44df5cec6c97bd467b3d74cdb77485244455541873bb",
"0xe0793f4e283c8851cbe541e001464a62ca223befcf36c90278e4b5be0887ea2a",
"0xc267e2dc373e10d4e396476761d61b6cf91ff8af32e5bce73f0c3c050aeec7be"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


