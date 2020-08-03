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
declare type BuildTransactionResult = {
    txId: string;
    txHex: string;
};
export default class Wallet extends BtcWalletHelper {
    decimals: number;
    bitcoinLib: any;
    [x: string]: any;
    constructor();
    parseNetwork(network: any): object;
    buildTransactionOnline(utxos: Array<{
        txid: string;
        vout: number;
    }>, targets: {
        [address: string]: number;
    }, wifs: Array<string>): Promise<BuildTransactionResult>;
}
export {};
