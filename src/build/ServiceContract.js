const ServiceContract = {
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
                "inputs": [],
                "outputs": []
            },
            {
                "name": "setService",
                "inputs": [
                    {
                        "name": "key",
                        "type": "uint256"
                    },
                    {
                        "name": "value",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deleteService",
                "inputs": [
                    {
                        "name": "key",
                        "type": "uint256"
                    }
                ],
                "outputs": []
            },
            {
                "name": "destruct",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "name": "services",
                        "type": "map(uint256,string)"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_owner",
                "type": "address"
            }
        ],
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
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_services",
                "type": "map(uint256,string)"
            }
        ]
    },
    tvc: "te6ccgECHQEAA3sAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAgaK2zUcBAQkiu1TIOMDIMD/4wIgwP7jAvILGQYFGwLm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAwHA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBgYBwIoIIIQR8Yt2rvjAiCCEGi1Xz+64wINCARoMPhCbuMA+Ebyc9H4QYjIz44rbNbMzsnbPCBu8tBkIG7yf9D6QDD4SccF8uBk+ADbPH/4ZwwcCRUCGNAgizits1jHBYqK4goLAQrXTdDbPAsAQtdM0IsvSkDXJvQEMdMJMYsvShjXJiDXSsIBktdNkjBt4gGi7UTQ10nCAYqORnDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqbfhrgED0DvK91wv/+GJw+GPiFwRQIIIQBmSXI7rjAiCCEBQYGNq64wIgghAawPlauuMCIIIQR8Yt2rrjAhQSEA4DJjD4RvLgTPhCbuMA0ds82zx/+GcXDxUAUPhJ+ErHBfLgZGim/mCCEAjw0YC+8uBk+EnIz4UIzoBvz0DJgQCg+wADKjD4RvLgTPhCbuMA0//R2zzbPH/4ZxcRFQBi+En4SscF8uBkaKb+YIIQCPDRgL7y4GT4S4EBAPRbMPhr+EnIz4WIzoBvz0DJgED7AAMsMPhG8uBM+EJu4wDT/9TR2zzbPH/4ZxcTFQBi+En4SscF8uBkaKb+YIIQC+vCAL7y4GQB+EuBAQD0F/hr+EnIz4WIzoBvz0DJgED7AAN0MPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOcc8LYQLIz5IZklyOzvQAzclw+wCRW+LjAH/4ZxcWFQAq+Ev4SvhD+ELIy//LP8+DzvQAye1UAAj4SvhLAC7tRNDT/9M/0wAx+kD0BNH4a/hq+GP4YgAK+Eby4EwCCvSkIPShGxoAFHNvbCAwLjQ5LjAAAAAMIPhh7R7Z",
    code: "te6ccgECGgEAA04AAgaK2zUZAQQkiu1TIOMDIMD/4wIgwP7jAvILFgMCGALm7UTQ10nDAfhmjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+Gkh2zzTAAGfgQIA1xgg+QFY+EL5EPKo3tM/AfhDIbnytCD4I4ED6KiCCBt3QKC58rT4Y9MfAfgjvPK50x8B2zz4R27yfAkEA1jtRNDXScMB+GYi0NMD+kAw+GmpOADcIccA4wIh1w0f8rwh4wMB2zz4R27yfBUVBAIoIIIQR8Yt2rvjAiCCEGi1Xz+64wIKBQRoMPhCbuMA+Ebyc9H4QYjIz44rbNbMzsnbPCBu8tBkIG7yf9D6QDD4SccF8uBk+ADbPH/4ZwkZBhICGNAgizits1jHBYqK4gcIAQrXTdDbPAgAQtdM0IsvSkDXJvQEMdMJMYsvShjXJiDXSsIBktdNkjBt4gGi7UTQ10nCAYqORnDtRND0BXEhgED0Do4kjQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE3/hqbfhrgED0DvK91wv/+GJw+GPiFARQIIIQBmSXI7rjAiCCEBQYGNq64wIgghAawPlauuMCIIIQR8Yt2rrjAhEPDQsDJjD4RvLgTPhCbuMA0ds82zx/+GcUDBIAUPhJ+ErHBfLgZGim/mCCEAjw0YC+8uBk+EnIz4UIzoBvz0DJgQCg+wADKjD4RvLgTPhCbuMA0//R2zzbPH/4ZxQOEgBi+En4SscF8uBkaKb+YIIQCPDRgL7y4GT4S4EBAPRbMPhr+EnIz4WIzoBvz0DJgED7AAMsMPhG8uBM+EJu4wDT/9TR2zzbPH/4ZxQQEgBi+En4SscF8uBkaKb+YIIQC+vCAL7y4GQB+EuBAQD0F/hr+EnIz4WIzoBvz0DJgED7AAN0MPhG8uBM+EJu4wDR2zwijiEk0NMB+kAwMcjPhyDOcc8LYQLIz5IZklyOzvQAzclw+wCRW+LjAH/4ZxQTEgAq+Ev4SvhD+ELIy//LP8+DzvQAye1UAAj4SvhLAC7tRNDT/9M/0wAx+kD0BNH4a/hq+GP4YgAK+Eby4EwCCvSkIPShGBcAFHNvbCAwLjQ5LjAAAAAMIPhh7R7Z",
    codeHash: "bb76865edd00068615d778462f4610b21da3a5197431ff36dfba3cd9bd0e68c7",
};
module.exports = { ServiceContract };