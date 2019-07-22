import '@pefish/js-node-assist';
import BitcoinWalletHelper from './wallet';
import assert from 'assert';

declare global {
  namespace NodeJS {
    interface Global {
      logger: any;
    }
  }
}

describe('bitcoinWalletHelper', () => {

  let walletHelper
  const mainnet = 'mainnet'

  before(async () => {
    walletHelper = new BitcoinWalletHelper()
  })

  it('deriveAllByXprivPath', async () => {
    try {
      const result = walletHelper.deriveAllByXprivPath(`xprv9s21ZrQH143K3J8How7cEP3KCkTz3R3QiSXFVBXBWAbfwyqFHu1aEMrk8V78fqZpf7LrVYZmyybDNDqZ5QahCtaha9E1i5zm1A9kMrqSFNn`, `m/44'/0'/0'/0/0`, mainnet)
      // global.logger.error(result)
      assert.strictEqual(result['wif'], 'TBceDyd8Axz9jXjfBzGeHoQHhu1VoYqHhaBWgB1r11Q1CvW8VpsJ')
      assert.strictEqual(result['xpub'], 'xpub6G7UGdTHmM3aX7BQGfX23YMvFXx9sMMTC2xYFDW5JkHC3aLsBCTaeoRevrz315PZRFeBaRdjEQo3kPqHDytwmGaUV9ZjSxqukscuaG5CqVb')
      assert.strictEqual(result['xpriv'], 'xprvA387s7vPvyVHJd6wAdz1gQRBhW7fTtdbpp2wSq6TkQkDAn1idf9L717B5c1yXxGCPFYjwxVSPejzLsnpuk82N9Dpr9bk8SGEwjYN1112VVz')
    } catch (err) {
      global.logger.error(err)
      assert.throws(() => {}, err)
    }
  })

  it('getAddressFromPublicKey', async () => {
    try {
      const p2pkh = walletHelper.getAddressFromPublicKey('02345e4f22044560b22f957556b5978c277ec4eb80fa3bbdbd6339e24d9c30bcd5', `p2pkh`, mainnet)
      // global.logger.error(p2pkh)
      assert.strictEqual(p2pkh, `LSrjw9GE8vjokdspHELeX9Lz7vXZ1c11mP`)
      const segwit = walletHelper.getAddressFromPublicKey('02345e4f22044560b22f957556b5978c277ec4eb80fa3bbdbd6339e24d9c30bcd5', `p2sh(p2wpkh)`, mainnet)
      // global.logger.error(segwit)
      assert.strictEqual(segwit, `MPmMkmBtbC6JnuiPyeFn8uuA9AkWs3HtPu`)
    } catch (err) {
      global.logger.error(err)
      assert.throws(() => {}, err)
    }
  })


  it('getAllFromWif', async () => {
    try {
      const result = walletHelper.getAllFromWif('T3BJtYL77kGztGiL87JJRApxUXserE4A7CfudZx5BfnhsDKMk6aF', mainnet)
      // global.logger.error(result)
      assert.strictEqual(result['publicKey'], '02345e4f22044560b22f957556b5978c277ec4eb80fa3bbdbd6339e24d9c30bcd5')
      assert.strictEqual(result['privateKey'], '03c59b6851bbfc917e4dc9793d3ee17c8186e961e7906501de98e0a85d8ebc15')
    } catch (err) {
      global.logger.error(err)
      assert.throws(() => {}, err)
    }
  })

  // it('buildTransactionOnline', async () => {
  //   try {
  //     walletHelper.initRemoteClient({
  //       "host": "35.221.161.180",
  //       "port": 18332,
  //       "ssl": false
  //     })
  //     const tx = await walletHelper.buildTransactionOnline(
  //       [
  //         {
  //           "txid": "bb592f244d635d2ff4113bd066d9d0a4ab6932dbf7afb5c4d7aa6de98dafa2a4",
  //           "vout": 4,
  //         },
  //       ],
  //       {
  //         "37aQdhpqrNgGDfLHshViB22XpAif1jwkjp": 3.058,
  //         "Lc9gX3UJPntZjNuWd7h4JCxGZiXRotTCMb": 0.04
  //       },
  //       [``],
  //     )
  //     global.logger.error(JSON.stringify(tx))
  //     // assert.strictEqual(segwit, `MPmMkmBtbC6JnuiPyeFn8uuA9AkWs3HtPu`)
  //   } catch (err) {
  //     global.logger.error(err)
  //     assert.throws(() => {}, err)
  //   }
  // })
})

