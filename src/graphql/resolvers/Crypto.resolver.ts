import { EncryptionAction } from '@enums/crypto.enums';
import { CryptoService } from '@graphql/services/Crypto.service';
import {
  AsymmetricActionInput,
  CryptographicOutput,
  ECKeyPairInput,
  HashInput,
  HMACInput,
  KeyPairOutput,
  RSAKeyPairInput,
  SignDataInput,
  SymmetricActionInput,
  VerificationOutput,
  VerifyDataInput,
} from '@graphql/types/crypto.types';
import 'reflect-metadata';
import { Arg, Mutation, Query, registerEnumType, Resolver } from 'type-graphql';
import { Service } from 'typedi';

registerEnumType(EncryptionAction, {
  name: 'EncryptionAction',
});

@Service()
@Resolver()
export class CryptoResolver {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly cryptoService: CryptoService) {}

  @Query((_returns) => CryptographicOutput)
  hashData(@Arg('input') data: HashInput): CryptographicOutput {
    return { output: this.cryptoService.hashData(data) };
  }

  @Query((_returns) => CryptographicOutput)
  generateHMAC(@Arg('input') data: HMACInput): CryptographicOutput {
    return { output: this.cryptoService.generateHMAC(data) };
  }

  @Query((_returns) => CryptographicOutput)
  generateSymmetricKey(): CryptographicOutput {
    return { output: this.cryptoService.generateSymmetricKey() };
  }

  @Query((_returns) => CryptographicOutput)
  generateIV(): CryptographicOutput {
    return { output: this.cryptoService.generateIV() };
  }

  @Query((_returns) => KeyPairOutput)
  generateRSAPair(@Arg('input') data: RSAKeyPairInput): KeyPairOutput {
    return this.cryptoService.generateRSAPair(data);
  }

  @Query((_returns) => KeyPairOutput)
  generateECPair(@Arg('input') data: ECKeyPairInput): KeyPairOutput {
    return this.cryptoService.generateECPair(data);
  }

  @Mutation((_returns) => CryptographicOutput)
  symmetricAction(
    @Arg('input') data: SymmetricActionInput
  ): CryptographicOutput {
    return { output: this.cryptoService.symmetricAction(data) };
  }

  @Mutation((_returns) => CryptographicOutput)
  asymmetricAction(
    @Arg('input') data: AsymmetricActionInput
  ): CryptographicOutput {
    return { output: this.cryptoService.asymmetricAction(data) };
  }

  @Mutation((_returns) => CryptographicOutput)
  signData(@Arg('input') data: SignDataInput): CryptographicOutput {
    return { output: this.cryptoService.signData(data) };
  }

  @Mutation((_returns) => VerificationOutput)
  verifySignature(@Arg('input') data: VerifyDataInput): VerificationOutput {
    return { isValid: this.cryptoService.verifySignature(data) };
  }
}
