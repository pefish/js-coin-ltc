/** @module */
import '@pefish/js-node-assist'
import BtcWalletHelper from '@pefish/js-coin-btc/lib/wallet'
import ErrorHelper from '@pefish/js-error'

declare global {
  namespace NodeJS {
    interface Global {
      logger: any;
    }
  }
}

export default class Wallet extends BtcWalletHelper {
  decimals: number = 8;
  bitcoinLib: any

  public constructor () {
    super()
    this.bitcoinLib = require('@pefish/bitcoinjs-lib')
  }

  parseNetwork (network): object {
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
      }
    } else {
      throw new ErrorHelper(`network error`)
    }
  }
}
