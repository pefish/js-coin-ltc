/** @module */
import { BtcWallet } from '@pefish/js-coin-btc';
import { Network } from "bitcoinjs-lib";
declare global {
    namespace NodeJS {
        interface Global {
            logger: any;
        }
    }
}
export default class Wallet extends BtcWallet {
    decimals: number;
    bitcoinLib: any;
    constructor();
    parseNetwork(network: any): Network;
}
