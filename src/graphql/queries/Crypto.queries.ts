import { gql } from '@apollo/client';

export const HashData = gql(`
    query HashData($input: HashInput!) {
        hashData(input: $input) {
            output
        }
    }
`);

export const GenerateHMAC = gql(`
    query GenerateHMAC($input: HMACInput!) {
        generateHMAC(input: $input) {
            output
        }
    }
`);

export const GenerateSymmetricKey = gql(`
    query GenerateSymmetricKey {
        generateSymmetricKey {
            output
        }
    }
`);

export const GenerateIV = gql(`
    query GenerateIV {
        generateIV {
            output
        }
    }
`);

export const GenerateRSAPair = gql(`
    query GenerateRSAPair($input: RSAKeyPairInput!) {
        generateRSAPair(input: $input) {
            publicKey
            privateKey
        }
    }
`);

export const GenerateECPair = gql(`
    query GenerateECPair($input: ECKeyPairInput!) {
        generateECPair(input: $input) {
            publicKey
            privateKey
        }
    }
`);

export const SymmetricAction = gql(`
    mutation SymmetricAction($input: SymmetricActionInput!) {
        symmetricAction(input: $input) {
            output
        }
    }
`);

export const AsymmetricAction = gql(`
    mutation AsymmetricAction($input: AsymmetricActionInput!) {
        asymmetricAction(input: $input) {
            output
        }
    }
`);

export const SignData = gql(`
    mutation SignData($input: SignDataInput!) {
        signData(input: $input) {
            output
        }
    }
`);

export const VerifySignature = gql(`
    mutation VerifySignature($input: VerifyDataInput!) {
        verifySignature(input: $input) {
            isValid
        }
    }
`);
