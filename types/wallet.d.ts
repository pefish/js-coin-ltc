/** @module */
import '@pefish/js-node-assist';
import BtcWalletHelper from '@pefish/js-coin-btc/lib/wallet';
declare global {
    namespace NodeJS {
        interface Global {
            logger: any;
        }
    }
}
export default class Wallet extends BtcWalletHelper {
    decimals: number;
    bitcoinLib: any;
    constructor();
    parseNetwork(network: any): object;
}
