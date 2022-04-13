const { Account } = require('@tonclient/appkit')
const { TonClient, signerKeys, signerNone } = require('@tonclient/core')

const { ServiceContract } = require('../build/ServiceContract')

module.exports = {

    createAccountService: async (client, address) => {
        return new Promise(async (resolve, reject) => {
            try {
                resolve(new Account(ServiceContract, {
                    address: address,
                    signer: signerNone(),
                    client: client
                }))
            } catch(er) {
                reject(er)
            }
        }) 
    },

    setService: async (userAccount, ServiceAddress, key, value) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: ServiceContract.abi },
                    call_set: {
                        function_name: "setService",
                        input: {
                            key: key,
                            value: value
                        }
                    },
                    is_internal: true,
                    signer: signerNone()
                })

                var ress =  await userAccount.run("sendTransaction", {
                    dest: ServiceAddress,
                    value: 250000000,
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

    deleteService: async (userAccount, ServiceAddress, key) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: ServiceContract.abi },
                    call_set: {
                        function_name: "deleteService",
                        input: {
                            key: key
                        }
                    },
                    is_internal: true,
                    signer: signerNone()
                })

                var ress =  await userAccount.run("sendTransaction", {
                    dest: ServiceAddress,
                    value: 200000000,
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

    destruct: async (userAccount, ServiceAddress) => {
        return new Promise(async (resolve, reject) => {
            try {
                var { body } = await TonClient.default.abi.encode_message_body({
                    abi: { type: "Contract", value: ServiceContract.abi },
                    call_set: {
                        function_name: "destruct"
                    },
                    is_internal: true,
                    signer: signerNone()
                })

                var ress =  await userAccount.run("sendTransaction", {
                    dest: ServiceAddress,
                    value: 200000000,
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

    getInfo: async (ServiceAccount) => {
        return new Promise(async (resolve, reject) => {
            try {
                var ress = ServiceAccount.runLocal("getInfo")

                resolve(ress)
            } catch(er) {
                reject(er)
            }
        })
    }

}