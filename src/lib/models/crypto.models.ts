import { EncryptionAction } from '@enums/crypto.enums';

export interface IHashInput {
  data: string;
  hashAlgo: string;
}

export interface IHMACInput extends IHashInput {
  secret: string;
}

export interface IRSAKeyPairInput {
  modulusLength: number;
}

export interface IECKeyPairInput {
  namedCurve: string;
}

export interface IAsymmetricActionInput {
  action: EncryptionAction;
  data: string;
  key: string;
}

export interface ISymmetricActionInput extends IAsymmetricActionInput {
  algo: string;
  iv: string;
}

export interface ISignDataInput {
  data: string;
  hashAlgo: string;
  key: string;
}

export interface IVerifyDataInput extends ISignDataInput {
  signature: string;
}

export interface ICryptographicOutput {
  output: string;
}

export interface IKeyPairOutput {
  publicKey: string;
  privateKey: string;
}

export interface IVerificationOutput {
  isValid: boolean;
}
