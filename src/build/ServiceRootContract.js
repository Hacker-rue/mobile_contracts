const ServiceRootContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "codeService",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "createService",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "resolveCodeHashService",
                "inputs": [],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveService",
                "inputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrService",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_codeService",
                "type": "cell"
            }
        ]
    },
    tvc: "te6ccgECHQEAA3sAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsaBQQcAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8FgYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8GRkGBFAgghAciukbuuMCIIIQLChHgbrjAiCCEDk2Yqu64wIgghBYi8ABuuMCFAwJBwOCMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5NiLwAGzs3JcPsAkTDi4wB/+GcYCBUCbo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNs8WNs8+QBwyM+GQMoHy//J0DEOCwMmMPhG8uBM+EJu4wDR2zzbPH/4ZxgKFQKsaKb+YIIQEeGjAL7y4GTbPPhJ2zwg+QDIz4oAQMv/yM+FiM8TjQSQL68IAAAAAAAAAAAAAAAAAAHAzxbMz5DRar5/yXD7APhJyM+FiM6Ab89AyYBA+wAOCwBEbXDIy/9wWIBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAKwoR4GM8Wy//JcPsAkTDi4wB/+GcYDRUBCNs8+QAOARb4KMjO+ErQAcnbPA8CFiGLOK2zWMcFioriERABCAHbPMkSASYB1NQwEtDbPMjPjits1hLMzxHJEgFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOEwEEiAEcAiow+EJu4wD4RvJz1NH4APhq2zx/+GcWFQAi+Er4Q/hCyMv/yz/Pg8zJ7VQCFu1E0NdJwgGKjoDiGBcBLnDtRND0BYj4aoBA9A7yvdcL//hicPhjHAAk7UTQ0//TP9MAMdTR+Gr4Y/hiAAr4RvLgTAIK9KQg9KEcGwAUc29sIDAuNDkuMAAA",
    code: "te6ccgECGgEAA04ABCSK7VMg4wMgwP/jAiDA/uMC8gsXAgEZAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8EwMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FhYDBFAgghAciukbuuMCIIIQLChHgbrjAiCCEDk2Yqu64wIgghBYi8ABuuMCEQkGBAOCMPhG8uBM+EJu4wD6QZXU0dD6QN/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5NiLwAGzs3JcPsAkTDi4wB/+GcVBRICbo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNs8WNs8+QBwyM+GQMoHy//J0DELCAMmMPhG8uBM+EJu4wDR2zzbPH/4ZxUHEgKsaKb+YIIQEeGjAL7y4GTbPPhJ2zwg+QDIz4oAQMv/yM+FiM8TjQSQL68IAAAAAAAAAAAAAAAAAAHAzxbMz5DRar5/yXD7APhJyM+FiM6Ab89AyYBA+wALCABEbXDIy/9wWIBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQOCMPhG8uBM+EJu4wDR2zwhjigj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAAKwoR4GM8Wy//JcPsAkTDi4wB/+GcVChIBCNs8+QALARb4KMjO+ErQAcnbPAwCFiGLOK2zWMcFioriDg0BCAHbPMkPASYB1NQwEtDbPMjPjits1hLMzxHJDwFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOEAEEiAEZAiow+EJu4wD4RvJz1NH4APhq2zx/+GcTEgAi+Er4Q/hCyMv/yz/Pg8zJ7VQCFu1E0NdJwgGKjoDiFRQBLnDtRND0BYj4aoBA9A7yvdcL//hicPhjGQAk7UTQ0//TP9MAMdTR+Gr4Y/hiAAr4RvLgTAIK9KQg9KEZGAAUc29sIDAuNDkuMAAA",
    codeHash: "33934e99272c42cbd8c57e067ef5a714a9cc87c5f9d89bf7e6a6d7d09db697c8",
};
module.exports = { ServiceRootContract };