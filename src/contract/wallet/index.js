const {Cell} = require("../../boc");
const {Address, BN, toNano, bytesToHex, hexToBytes, nacl, stringToBytes, bytesToBase64} = require("../../utils");
const {Contract} = require("../index.js");
const {SimpleWalletContractR1, SimpleWalletContractR2, SimpleWalletContractR3} = require("./WalletContractSimple");
const {WalletV2ContractR1, WalletV2ContractR2} = require("./WalletContractV2");
const {WalletV3ContractR1, WalletV3ContractR2} = require("./WalletContractV3");
const {WalletV4ContractR1} = require("./WalletContractV4");

class Wallets {
    /**
     * @param provider    {HttpProvider}
     */
    constructor(provider) {
        this.provider = provider;
        this.all = {
            'simpleR1': SimpleWalletContractR1,
            'simpleR2': SimpleWalletContractR2,
            'simpleR3': SimpleWalletContractR3,
            'v2R1': WalletV2ContractR1,
            'v2R2': WalletV2ContractR2,
            'v3R1': WalletV3ContractR1,
            'v3R2': WalletV3ContractR2,
            'v4R1': WalletV4ContractR1
        };
        this.list = [SimpleWalletContractR1, SimpleWalletContractR2, SimpleWalletContractR3, WalletV2ContractR1, WalletV2ContractR2, WalletV3ContractR1, WalletV3ContractR2, WalletV4ContractR1];
        this.defaultVersion = 'v3R1';
        this.default = this.all[this.defaultVersion];
    }

    create(options) {
        return new this.default(this.provider, options);
    }
}

module.exports.default = Wallets;
