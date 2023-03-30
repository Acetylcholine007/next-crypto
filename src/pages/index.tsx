import {
  useAsymmetricActionMutation,
  useGenerateECPairLazyQuery,
  useGenerateHMACLazyQuery,
  useGenerateIVLazyQuery,
  useGenerateRSAPairLazyQuery,
  useGenerateSymmetricKeyLazyQuery,
  useHashDataLazyQuery,
  useSignDataMutation,
  useSymmetricActionMutation,
  useVerifySignatureMutation,
} from '@/__generated__/graphql';
import { FormEvent, useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showError, setShowError] = useState(false);

  const [hashData, hashDataBundle] = useHashDataLazyQuery();
  const [generateHMAC, generateHMACBundle] = useGenerateHMACLazyQuery();
  const [generateSymmetricKey, generateSymmetricKeyBundle] =
    useGenerateSymmetricKeyLazyQuery({
      errorPolicy: 'all',
    });
  const [generateIV, generateIVBundle] = useGenerateIVLazyQuery();
  const [generateRSAPair, generateRSAPairBundle] =
    useGenerateRSAPairLazyQuery();
  const [generateECPair, generateECPairBundle] = useGenerateECPairLazyQuery();
  const [symmetricAction, symmetricActionBundle] = useSymmetricActionMutation();
  const [asymmetricAction, asymmetricActionBundle] =
    useAsymmetricActionMutation();
  const [signData, signDataBundle] = useSignDataMutation();
  const [verifySignature, verifySignatureBundle] = useVerifySignatureMutation();

  useEffect(() => {
    if (
      hashDataBundle.error ||
      generateHMACBundle.error ||
      generateSymmetricKeyBundle.error ||
      generateIVBundle.error ||
      generateRSAPairBundle.error ||
      generateECPairBundle.error ||
      symmetricActionBundle.error ||
      asymmetricActionBundle.error ||
      signDataBundle.error ||
      verifySignatureBundle.error
    ) {
      setShowError(true);
    }
  }, [
    asymmetricActionBundle.error,
    generateECPairBundle,
    generateHMACBundle.error,
    generateIVBundle.error,
    generateRSAPairBundle.error,
    generateSymmetricKeyBundle.error,
    hashDataBundle.error,
    signDataBundle.error,
    symmetricActionBundle.error,
    verifySignatureBundle.error,
  ]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (showError) {
      timeout = setTimeout(() => setShowError(false), 3000);
    }

    return () => clearTimeout(timeout);
  }, [showError]);

  const dataExtractor = <T,>(e: FormEvent<HTMLFormElement>) => {
    return {
      variables: {
        input: Object.entries(e.currentTarget.elements).reduce(
          (a, [key, value]) => {
            if (
              isNaN(+key) &&
              ((value instanceof HTMLInputElement && value.type !== 'radio') ||
                value instanceof RadioNodeList)
            ) {
              return {
                ...a,
                [key]:
                  value instanceof HTMLInputElement && value.type === 'number'
                    ? +value.value
                    : value.value,
              };
            } else return a;
          },
          {}
        ) as T,
      },
    };
  };
  return (
    <>
      <div className={styles.dashboard}>
        <div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                hashData(dataExtractor(e));
              }}
            >
              <h1>Hash Data</h1>
              <input name="data" type="text" placeholder="Data" />
              <input
                name="hashAlgo"
                type="text"
                placeholder="Hash Algo"
                defaultValue="sha256"
              />
              <button>Generate</button>
            </form>
            <input
              readOnly
              type="text"
              value={
                hashDataBundle.data ? hashDataBundle.data.hashData.output : ''
              }
            />
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                generateHMAC(dataExtractor(e));
              }}
            >
              <h1>Generate HMAC</h1>
              <input name="data" type="text" placeholder="Data" />
              <input
                name="hashAlgo"
                type="text"
                placeholder="Hash Algo"
                defaultValue="sha256"
              />
              <input name="secret" type="text" placeholder="Secret Key" />
              <button>Generate</button>
            </form>
            <input
              readOnly
              type="text"
              value={
                generateHMACBundle.data
                  ? generateHMACBundle.data.generateHMAC.output
                  : ''
              }
            />
          </div>
        </div>
        <div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                generateSymmetricKey();
              }}
            >
              <h1>Generate Symmetric Key</h1>
              <button>Generate</button>
            </form>
            <input
              readOnly
              type="text"
              value={
                generateSymmetricKeyBundle.data
                  ? generateSymmetricKeyBundle.data.generateSymmetricKey.output
                  : ''
              }
            />
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                generateIV();
              }}
            >
              <h1>Generate IV</h1>
              <button>Generate</button>
            </form>
            <input
              readOnly
              type="text"
              value={
                generateIVBundle.data
                  ? generateIVBundle.data.generateIV.output
                  : ''
              }
            />
          </div>
        </div>
        <div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                generateRSAPair(dataExtractor(e));
              }}
            >
              <h1>Generate RSA Key Pair</h1>
              <input
                name="modulusLength"
                type="number"
                placeholder="Bit length"
                defaultValue={2048}
              />
              <button>Generate</button>
            </form>
            <input
              readOnly
              type="text"
              placeholder="Private Key"
              value={
                generateRSAPairBundle.data
                  ? generateRSAPairBundle.data.generateRSAPair.privateKey
                  : ''
              }
            />
            <input
              readOnly
              type="text"
              placeholder="Public Key"
              value={
                generateRSAPairBundle.data
                  ? generateRSAPairBundle.data.generateRSAPair.publicKey
                  : ''
              }
            />
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                generateECPair(dataExtractor(e));
              }}
            >
              <h1>Generate EC Key Pair</h1>
              <input
                name="namedCurve"
                type="text"
                placeholder="Curve Name"
                defaultValue="secp256k1"
              />
              <button>Generate</button>
            </form>
            <input
              readOnly
              type="text"
              placeholder="Private Key"
              value={
                generateECPairBundle.data
                  ? generateECPairBundle.data.generateECPair.privateKey
                  : ''
              }
            />
            <input
              readOnly
              type="text"
              placeholder="Public Key"
              value={
                generateECPairBundle.data
                  ? generateECPairBundle.data.generateECPair.publicKey
                  : ''
              }
            />
          </div>
        </div>
        <div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                symmetricAction(dataExtractor(e));
              }}
            >
              <h1>Symmetric Encryption</h1>
              <div>
                <input
                  type="radio"
                  id="S_ENCRYPT"
                  name="action"
                  value="ENCRYPT"
                  defaultChecked
                />
                <label htmlFor="S_ENCRYPT">Encrypt</label>
                <input
                  type="radio"
                  id="S_DECRYPT"
                  name="action"
                  value="DECRYPT"
                />
                <label htmlFor="S_DECRYPT">Decrypt</label>
              </div>
              <input name="data" type="text" placeholder="Data" />
              <input
                name="algo"
                type="text"
                placeholder="Algo"
                defaultValue="aes256"
              />
              <input name="key" type="text" placeholder="Key" />
              <input name="iv" type="text" placeholder="IV" />
              <button>Execute</button>
            </form>
            <input
              readOnly
              type="text"
              value={
                symmetricActionBundle.data
                  ? symmetricActionBundle.data.symmetricAction.output
                  : ''
              }
            />
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                asymmetricAction(dataExtractor(e));
              }}
            >
              <h1>Asymmetric Encryption</h1>
              <div>
                <input
                  type="radio"
                  id="A_ENCRYPT"
                  name="action"
                  value="ENCRYPT"
                  defaultChecked
                />
                <label htmlFor="A_ENCRYPT">Encrypt</label>
                <input
                  type="radio"
                  id="A_DECRYPT"
                  name="action"
                  value="DECRYPT"
                />
                <label htmlFor="A_DECRYPT">Decrypt</label>
              </div>
              <input name="data" type="text" placeholder="Data" />
              <input name="key" type="text" placeholder="Key" />
              <button type="submit">Execute</button>
            </form>
            <input
              readOnly
              type="text"
              value={
                asymmetricActionBundle.data
                  ? asymmetricActionBundle.data.asymmetricAction.output
                  : ''
              }
            />
          </div>
        </div>
        <div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signData(dataExtractor(e));
              }}
            >
              <h1>Sign Data</h1>
              <input name="data" type="text" placeholder="Data" />
              <input
                name="hashAlgo"
                type="text"
                placeholder="Hash Algo"
                defaultValue="sha256"
              />
              <input name="key" type="text" placeholder="Key" />
              <button type="submit">Sign</button>
            </form>
            <input
              readOnly
              type="text"
              value={
                signDataBundle.data ? signDataBundle.data.signData.output : ''
              }
            />
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                verifySignature(dataExtractor(e));
              }}
            >
              <h1>Verify Signature</h1>
              <input name="data" type="text" placeholder="Data" />
              <input
                name="hashAlgo"
                type="text"
                placeholder="Hash Algo"
                defaultValue="sha256"
              />
              <input name="key" type="text" placeholder="Key" />
              <input name="signature" type="text" placeholder="Signature" />
              <button type="submit">Validate</button>
            </form>
            <input
              readOnly
              type="text"
              value={
                verifySignatureBundle.data
                  ? verifySignatureBundle.data.verifySignature.isValid
                    ? 'VALID'
                    : 'TAMPERED'
                  : ''
              }
            />
          </div>
        </div>
      </div>
      {showError && (
        <div className="fixed bottom-0 left-1/2 w-[90%] -translate-x-1/2 rounded-t-md bg-red-600 p-2 text-center font-bold text-white shadow-md shadow-slate-900 dark:bg-red-800 sm:w-[70%] md:w-48">
          Error Occurred!
        </div>
      )}
    </>
  );
}
