const { Account } = require('@tonclient/appkit')
const { TonClient, signerKeys, signerNone } = require('@tonclient/core')
const { libNode } = require('@tonclient/lib-node')

const { ClientContract } = require('./build/ClientContract')
const { ServiceRootContract } = require('./build/ServiceRootContract')
const { ServiceContract } = require('./build/ServiceContract')
const ServiceAPI = require('./APIContracts/ServiceAPI')
const ServiceRootAPI = require('./APIContracts/ServiceRootAPI')

TonClient.useBinaryLibrary(libNode)


const client = new TonClient({
    network: {
        endpoints: ['net.ton.dev']
    }
})

const userAccount = new Account(ClientContract, {
    address: "0:81426fdc3f6d101c5f20633301f8fec9e3c9b58e5e8f2ad81ac32964b89239e0",
    signer: signerKeys({
        public: '21ceb21f9df888dc72bd173d1026feb7620c9a8b6cc7ca2a4f32d680ba5ddbb4', 
        secret: '0bd2bc82f1cd7c89b2afeb2b6cce2fc3caedfc1c6db1cddbf5a9f18b1f474161'  
      }),
    client: client
})

const ServiceRoot = new Account(ServiceRootContract, {
    address: "0:63c1f6dc55ecf0b01494b6f74c50a31927c805c899fe5da90f7102df2f27a150",
    signer: signerKeys({
        public: 'de592f12074aef726b818e1fa9e15b467262d210a6dde625de08cdb24df624c2', 
        secret: 'bbd3f9c0aa1333033bed83ed0c67b589362cc6f1b81876706d6fb027947e2e13'  
      }),
    client: client
})

async function main() {
    try {

        //await ServiceRootAPI.createService(userAccount, await ServiceRoot.getAddress())

        var service = await ServiceAPI.createAccountService(client, await ServiceRootAPI.resolveService(ServiceRoot, await userAccount.getAddress()))

        console.log('1')

        // await ServiceAPI.setService(userAccount, await service.getAddress(), 0, "Привет, добрый день")
        // await ServiceAPI.setService(userAccount, await service.getAddress(), 2, "Привет, добрый день")
        // await ServiceAPI.setService(userAccount, await service.getAddress(), 5, "Привет, добрый день")

        //await ServiceAPI.deleteService(userAccount, await service.getAddress(), 0)

        //await ServiceAPI.destruct(userAccount, await service.getAddress())

        var ress = await ServiceAPI.getInfo(service)

        console.log(ress.decoded.output.services)

    } catch(er) {
        console.log(er)
    }
}

main()