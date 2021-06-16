/** @module */
import { BtcWallet } from '@pefish/js-coin-btc'
import ErrorHelper from '@pefish/js-error'
import {Network} from "bitcoinjs-lib";

declare global {
  namespace NodeJS {
    interface Global {
      logger: any;
    }
  }
}

export default class Wallet extends BtcWallet {
  decimals: number = 8;
  bitcoinLib: any

  public constructor () {
    super()
    this.bitcoinLib = require('@pefish/bitcoinjs-lib')
  }

  parseNetwork (network): Network {
    if (network === `mainnet`) {
      return {
        messagePrefix: '\x19Litecoin Signed Message:\n',
        bech32: 'bc',
        bip32: {
          public: 0x0488b21e,
          private: 0x0488ade4,
        },
        pubKeyHash: 0x30,
        scriptHash1: 0x05,
        scriptHash: 0x32,
        wif: 0xB0,
      } as any
    } else {
      throw new ErrorHelper(`network error`)
    }
  }
}
