const networkSplitter = (network, {ropsten, rinkeby, mainnet, local, sokol, poa, xdai}) => {
    switch (network) {
        case 1:
        case '1':
        case 'mainnet':
            return mainnet;
        case 3:
        case '3':
        case 'ropsten':
            return ropsten;
        case 4:
        case '4':
        case 'rinkeby':
            return rinkeby;
        case 5777:
        case '5777':
        case 'local':
            return local;
        default:
            throw new Error(`Unknown network ID ${network}`);
    }
};

const getNetworkName = (network) => {
    return networkSplitter(network, {
        // Eth main & test
        mainnet: 'mainnet',
        ropsten: 'ropsten',
        rinkeby: 'rinkeby',
        // Ganache / local
        local: 'local',
    });
};

/**
 * @param {String, Number} network the network to get
 * @param {string} [infuraKey] optional Infura key as not all networks need one
 * @return {string} the RPC connect string
 */
const getRpcConnectionUri = (network, infuraKey) => {
    const networkName = getNetworkName(network);

    switch (networkName) {
        case 'mainnet':
        case 'ropsten':
        case 'rinkeby':
            return `https://${networkName}.infura.io/v3/${infuraKey}`;
        case 'local':
            return `http://127.0.0.1:7545`;
        default:
            throw new Error(`Unknown network ID ${network}`);
    }
};

module.exports = {
    getNetworkName,
    networkSplitter,
    getRpcConnectionUri
};
