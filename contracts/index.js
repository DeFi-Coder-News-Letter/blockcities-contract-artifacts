const {networkSplitter} = require('../tools');

const abi = {
    BlockCities: require('./abis/v1/BlockCities'),
    BlockCitiesVendingMachine: require('./abis/v2/BlockCitiesVendingMachineV2'),
    ColourGenerator: require('./abis/v1/generators/ColourGenerator'),
    LogicGenerator: require('./abis/v2/generators/LogicGeneratorV2'),
};

module.exports = {
    abi: abi,
    addresses: {
        BlockCities: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '0x2f2d5aa0efdb9ca3c9bb789693d06bebea88792f',
                    abi: abi.BlockCities
                },
                ropsten: {
                    address: '0x86eD0a82dDc2EdEA8cC4Bc023eC2a4079DAB42c9',
                    abi: abi.BlockCities
                }
            });
        },
        BlockCitiesVendingMachine: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '0x24a896E29f79bE656F0216aE45E6cd79Bb80459b',
                    abi: abi.BlockCitiesVendingMachine
                },
                ropsten: {
                    address: '0xBEa2037e7bD516Ecd2f9fCAe8bFb1EF810b19204',
                    abi: abi.BlockCitiesVendingMachine
                }
            });
        },
        ColourGenerator: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '0x723f0128d909F059e4bEbBE9131ECfD02a85E4DE',
                    abi: abi.ColourGenerator
                },
                ropsten: {
                    address: '0x14d1c1dce3c91d8a9c213f9f0a3f3c7b88388c10 ',
                    abi: abi.ColourGenerator
                }
            });
        },
        LogicGenerator: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '0x94128bd30B2e8cfE106C24FEF181670deE4F20d8',
                    abi: abi.LogicGenerator
                },
                ropsten: {
                    address: '0x8e29c59713ac8d490429bea482ef5e3a320f39d1 ',
                    abi: abi.LogicGenerator
                }
            });
        },
    }
};
