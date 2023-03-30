import { EncryptionAction } from '@enums/crypto.enums';
import crypto from 'crypto';

export const hashData = (data: string, hashAlgo: string) => {
  return crypto.createHash(hashAlgo).update(data).digest('base64');
};

export const generateHMAC = (
  data: string,
  hashAlgo: string,
  secret: string
) => {
  return crypto.createHmac(hashAlgo, secret).update(data).digest('base64');
};

export const generateSymmetricKey = () => {
  return crypto.randomBytes(32).toString('base64');
};

export const generateIV = () => {
  return crypto.randomBytes(16).toString('base64');
};

export const generateRSAPair = (bitLength: number) => {
  const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: bitLength,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
  });

  return {
    publicKey: Buffer.from(publicKey).toString('base64'),
    privateKey: Buffer.from(privateKey).toString('base64'),
  };
};

export const generateECPair = (curveName: string) => {
  const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
    namedCurve: curveName,
    publicKeyEncoding: { type: 'spki', format: 'pem' },
    privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
  });

  return {
    publicKey: Buffer.from(publicKey).toString('base64'),
    privateKey: Buffer.from(privateKey).toString('base64'),
  };
};

export const symmetricAction = (
  action: EncryptionAction,
  data: string,
  key: string,
  algo: string,
  iv: string
) => {
  const translatedKey = Buffer.from(key, 'base64');
  const ivBuffer = Buffer.from(iv, 'base64');

  switch (action) {
    case EncryptionAction.ENCRYPT: {
      const cipher = crypto.createCipheriv(algo, translatedKey, ivBuffer);
      return cipher.update(data, 'utf8', 'base64') + cipher.final('base64');
    }
    case EncryptionAction.DECRYPT: {
      const decipher = crypto.createDecipheriv(algo, translatedKey, ivBuffer);
      return decipher.update(data, 'base64', 'utf-8') + decipher.final('utf8');
    }
  }
};

export const asymmetricAction = (
  action: EncryptionAction,
  data: string,
  key: string
) => {
  const recodedKey = Buffer.from(key, 'base64');

  switch (action) {
    case EncryptionAction.ENCRYPT: {
      return crypto
        .publicEncrypt(recodedKey, Buffer.from(data))
        .toString('base64');
    }
    case EncryptionAction.DECRYPT: {
      return crypto
        .privateDecrypt(recodedKey, Buffer.from(data, 'base64'))
        .toString('utf-8');
    }
  }
};

export const signData = (
  data: string,
  hashAlgo: string,
  privateKey: string
) => {
  const signer = crypto.createSign(hashAlgo);
  const recodedPrivateKey = Buffer.from(privateKey, 'base64');

  signer.update(data);
  return signer.sign(recodedPrivateKey, 'base64');
};

export const verifySignature = (
  data: string,
  hashAlgo: string,
  publicKey: string,
  signature: string
) => {
  const verifier = crypto.createVerify(hashAlgo);
  const recodedPublicKey = Buffer.from(publicKey, 'base64');

  verifier.update(data);
  return verifier.verify(recodedPublicKey, signature, 'base64');
};
