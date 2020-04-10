const {networkSplitter} = require('../tools');

const abi = {
    BlockCities: require('./abis/v1/BlockCities'), // v1
    BlockCitiesVendingMachine: require('./abis/v2/BlockCitiesVendingMachineV2'), // v2
    ColourGenerator: require('./abis/v2/generators/ColourGeneratorV2'), // v2
    LogicGenerator: require('./abis/v3/generators/LogicGeneratorV3'), // v3
    LimitedVendingMachine: require('./abis/v1/LimitedVendingMachine'), // v1
    CityBuildingValidator: require('./abis/v1/validators/CityBuildingValidator'), // v1
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
                },
                rinkeby: {
                    address: '0x74b8D7E2b681d1C4f13bd8722937A722bCc7A4F3',
                    abi: abi.BlockCities
                },
                local: {
                    address: '0x70D0C5f857C0C57190566d45AaF53234b65B8bE9',
                    abi: abi.BlockCities
                },
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
                },
                rinkeby: {
                    address: '0x018c994c2e15dA3a1aF1A9201E737688EA69F8aC',
                    abi: abi.BlockCitiesVendingMachine
                },
                local: {
                    address: '0xB5C37B3E64080081C446AA10C5f5aB20CBf55C04',
                    abi: abi.BlockCitiesVendingMachine
                },
            });
        },
        LimitedVendingMachine: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '',
                    abi: abi.LimitedVendingMachine
                },
                ropsten: {
                    address: '',
                    abi: abi.LimitedVendingMachine
                },
                rinkeby: {
                    address: '0x60B6e7Fc0f009A4AeE3ea3781ae20c22CdeCB46E',
                    abi: abi.LimitedVendingMachine
                },
                local: {
                    address: '',
                    abi: abi.LimitedVendingMachine
                },
            });
        },
        ColourGenerator: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '0x2fc79fa0f714d588835698ebe1965c511c03bb57',
                    abi: abi.ColourGenerator
                },
                ropsten: {
                    address: '0x14d1c1dce3c91d8a9c213f9f0a3f3c7b88388c10 ',
                    abi: abi.ColourGenerator
                },
                rinkeby: {
                    address: '0x26DA251AfAd2625360C672f8e071Be73D48ca8A1',
                    abi: abi.ColourGenerator
                },
                local: {
                    address: '0x380A8Ee44B9127b9669897E21b923E562eDEd6aF',
                    abi: abi.ColourGenerator
                },
            });
        },
        LogicGenerator: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '0x7c91ca2620cfbaabdf440007c3b0ef5a4ac22370',
                    abi: abi.LogicGenerator
                },
                ropsten: {
                    address: '0x8e29c59713ac8d490429bea482ef5e3a320f39d1 ',
                    abi: abi.LogicGenerator
                },
                rinkeby: {
                    address: '0x5329cFC4061cE82366464e6A06fcDc54927c0A11',
                    abi: abi.LogicGenerator
                },
                local: {
                    address: '0xFfE3da3717EBcCd1F52c138F0b07059F534AC8Fa',
                    abi: abi.LogicGenerator
                },
            });
        },
        CityBuildingValidator: function (network) {
            return networkSplitter(network, {
                mainnet: {
                    address: '',
                    abi: abi.CityBuildingValidator
                },
                ropsten: {
                    address: '',
                    abi: abi.CityBuildingValidator
                },
                rinkeby: {
                    address: '0x21bB0ACCF233eeE30a2555fF97b7e8A7535e5FC8',
                    abi: abi.CityBuildingValidator
                },
                local: {
                    address: '',
                    abi: abi.CityBuildingValidator
                },
            });
        },
    }
};
