import { EncryptionAction } from '@enums/crypto.enums';
import {
  IAsymmetricActionInput,
  ICryptographicOutput,
  IECKeyPairInput,
  IHashInput,
  IHMACInput,
  IKeyPairOutput,
  IRSAKeyPairInput,
  ISignDataInput,
  ISymmetricActionInput,
  IVerificationOutput,
  IVerifyDataInput,
} from '@models/crypto.models';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Field, InputType, ObjectType } from 'type-graphql';

@InputType()
export class HashInput implements IHashInput {
  @IsNotEmpty()
  @Field()
  data!: string;
  @Field()
  hashAlgo!: string;
}

@InputType()
export class HMACInput extends HashInput implements IHMACInput {
  @Field()
  secret!: string;
}

@InputType()
export class RSAKeyPairInput implements IRSAKeyPairInput {
  @IsNumber()
  @Field()
  modulusLength!: number;
}

@InputType()
export class ECKeyPairInput implements IECKeyPairInput {
  @IsNotEmpty()
  @Field()
  namedCurve!: string;
}

@InputType()
export class AsymmetricActionInput implements IAsymmetricActionInput {
  @IsNotEmpty()
  @Field((_type) => EncryptionAction)
  action!: EncryptionAction;
  @Field()
  data!: string;
  @Field()
  key!: string;
}

@InputType()
export class SymmetricActionInput
  extends AsymmetricActionInput
  implements ISymmetricActionInput
{
  @Field()
  algo!: string;
  @Field()
  iv!: string;
}

@InputType()
export class SignDataInput implements ISignDataInput {
  @IsNotEmpty()
  @Field()
  data!: string;
  @Field()
  hashAlgo!: string;
  @Field()
  key!: string;
}

@InputType()
export class VerifyDataInput extends SignDataInput implements IVerifyDataInput {
  @Field()
  signature!: string;
}

@ObjectType()
export class CryptographicOutput implements ICryptographicOutput {
  @Field()
  output!: string;
}

@ObjectType()
export class KeyPairOutput implements IKeyPairOutput {
  @Field()
  publicKey!: string;
  @Field()
  privateKey!: string;
}

@ObjectType()
export class VerificationOutput implements IVerificationOutput {
  @Field()
  isValid!: boolean;
}
