import {
  IAsymmetricActionInput,
  IECKeyPairInput,
  IHashInput,
  IHMACInput,
  IRSAKeyPairInput,
  ISignDataInput,
  ISymmetricActionInput,
  IVerifyDataInput,
} from '@models/crypto.models';
import * as cryptoUtils from '@utils/crypto.utils';
import 'reflect-metadata';
import { Service } from 'typedi';

@Service()
export class CryptoService {
  hashData(input: IHashInput) {
    return cryptoUtils.hashData(input.data, input.hashAlgo);
  }

  generateHMAC(input: IHMACInput) {
    return cryptoUtils.generateHMAC(input.data, input.hashAlgo, input.secret);
  }

  generateSymmetricKey() {
    return cryptoUtils.generateSymmetricKey();
  }

  generateIV() {
    return cryptoUtils.generateIV();
  }

  generateRSAPair(input: IRSAKeyPairInput) {
    return cryptoUtils.generateRSAPair(input.modulusLength);
  }

  generateECPair(input: IECKeyPairInput) {
    return cryptoUtils.generateECPair(input.namedCurve);
  }

  symmetricAction(input: ISymmetricActionInput) {
    return cryptoUtils.symmetricAction(
      input.action,
      input.data,
      input.key,
      input.algo,
      input.iv
    );
  }

  asymmetricAction(input: IAsymmetricActionInput) {
    return cryptoUtils.asymmetricAction(input.action, input.data, input.key);
  }

  signData(input: ISignDataInput) {
    return cryptoUtils.signData(input.data, input.hashAlgo, input.key);
  }

  verifySignature(input: IVerifyDataInput) {
    return cryptoUtils.verifySignature(
      input.data,
      input.hashAlgo,
      input.key,
      input.signature
    );
  }
}
