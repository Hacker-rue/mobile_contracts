const ClientContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "sendTransaction",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    },
                    {
                        "name": "bounce",
                        "type": "bool"
                    },
                    {
                        "name": "flags",
                        "type": "uint8"
                    },
                    {
                        "name": "payload",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "transfer",
                "inputs": [
                    {
                        "name": "dest",
                        "type": "address"
                    },
                    {
                        "name": "value",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deleteContract",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getPubKey",
                "inputs": [],
                "outputs": [
                    {
                        "name": "pubkey",
                        "type": "uint256"
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
            }
        ]
    },
    tvc: "te6ccgECGgEAAwwAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsXBwQZAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rkKBgEU0x8B2zz4R27yfAgDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8FhYIAiggghBM7mRsu+MCIIIQaLVfP7rjAgsJAiQw+EJu4wD4RvJz0fgA2zx/+GcKEwE+7UTQ10nCAYqOFHDtRND0BYBA9A7yvdcL//hicPhj4hUEUCCCEAXzxpK64wIgghAatQYNuuMCIIIQO3rDSbrjAiCCEEzuZGy64wISEA4MA3Yw+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/XDACV1NHQ0gDf1w0HldTR0NMH39TR2zzbPH/4ZxUNEwBU+EUgbpIwcN74Qrry4GT4AFUCVRLIz4WAygBzz0DOAfoCcc8LaszJAfsAA0ww+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/R2zzbPH/4ZxUPEwBC+EUgbpIwcN74Qrry4GT4AAHIz4UIzgH6AoBrz0DJcPsAA4Iw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAmrUGDYzxbL/8lw+wCRMOLjAH/4ZxUREwAU+AD4RSBukjBw3gMmMPhG8uBM+EJu4wDR2zzbPH/4ZxUUEwAc+EP4QsjL/8s/z4PJ7VQAQvhFIG6SMHDe+EK68uBk+AD4ScjPhQjOgG/PQMmBAKD7AAAe7UTQ0//TP9MAMdH4Y/hiAAr4RvLgTAIK9KQg9KEZGAAUc29sIDAuNDkuMAAA",
    code: "te6ccgECFwEAAt8ABCSK7VMg4wMgwP/jAiDA/uMC8gsUBAEWAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4dgQIA1xgg+QEB0wABlNP/AwGTAvhC4iD4ZfkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rkHAwEU0x8B2zz4R27yfAUDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8ExMFAiggghBM7mRsu+MCIIIQaLVfP7rjAggGAiQw+EJu4wD4RvJz0fgA2zx/+GcHEAE+7UTQ10nCAYqOFHDtRND0BYBA9A7yvdcL//hicPhj4hIEUCCCEAXzxpK64wIgghAatQYNuuMCIIIQO3rDSbrjAiCCEEzuZGy64wIPDQsJA3Yw+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/XDACV1NHQ0gDf1w0HldTR0NMH39TR2zzbPH/4ZxIKEABU+EUgbpIwcN74Qrry4GT4AFUCVRLIz4WAygBzz0DOAfoCcc8LaszJAfsAA0ww+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/R2zzbPH/4ZxIMEABC+EUgbpIwcN74Qrry4GT4AAHIz4UIzgH6AoBrz0DJcPsAA4Iw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAmrUGDYzxbL/8lw+wCRMOLjAH/4ZxIOEAAU+AD4RSBukjBw3gMmMPhG8uBM+EJu4wDR2zzbPH/4ZxIREAAc+EP4QsjL/8s/z4PJ7VQAQvhFIG6SMHDe+EK68uBk+AD4ScjPhQjOgG/PQMmBAKD7AAAe7UTQ0//TP9MAMdH4Y/hiAAr4RvLgTAIK9KQg9KEWFQAUc29sIDAuNDkuMAAA",
    codeHash: "4854438423fcc16eaa28b471917cccb6d660430a31a1343e9ad44e02efb077b5",
};
module.exports = { ClientContract };