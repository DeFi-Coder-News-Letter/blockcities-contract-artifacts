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
                }
            });
        },
        BlockCitiesVendingMachine: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '0x24a896E29f79bE656F0216aE45E6cd79Bb80459b',
                    abi: abi.BlockCitiesVendingMachine
                }
            });
        },
        ColourGenerator: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '0x723f0128d909F059e4bEbBE9131ECfD02a85E4DE',
                    abi: abi.ColourGenerator
                }
            });
        },
        LogicGenerator: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '0x94128bd30B2e8cfE106C24FEF181670deE4F20d8',
                    abi: abi.LogicGenerator
                }
            });
        },
    }
};
