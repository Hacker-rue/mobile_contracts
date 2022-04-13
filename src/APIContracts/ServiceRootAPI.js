const { Account } = require('@tonclient/appkit')
const { TonClient, signerKeys, signerNone } = require('@tonclient/core')

const { ServiceRootContract } = require('../build/ServiceRootContract')

module.exports = {

    createAccountServiceRoot: async (client, address) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(new Account(ServiceRootContract, {
                    address: address,
                    signer: signerNone(),
                    client: client
                }))
            } catch(er) {
                reject(er)
            }
        }) 
    },

    createService: async (userAccount, ServiceRootAddress) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: ServiceRootContract.abi },
                    call_set: {
                        function_name: "createService"
                    },
                    is_internal: true,
                    signer: signerNone()
                })

                var ress =  await userAccount.run("sendTransaction", {
                    dest: ServiceRootAddress,
                    value: 350000000,
                    bounce: true,
                    flags: 0,
                    payload: body
                })

                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    },

    resolveService: async (ServiceRootAccount, owner) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = await ServiceRootAccount.runLocal("resolveService", {
                    owner: owner
                })

                resolve(ress.decoded.output.addrService)
            } catch(er) {
                reject(er)
            }
        })
    }


}