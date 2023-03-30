// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AsymmetricActionInput = {
  action: EncryptionAction;
  data: Scalars['String'];
  key: Scalars['String'];
};

export type CryptographicOutput = {
  __typename?: 'CryptographicOutput';
  output: Scalars['String'];
};

export type ECKeyPairInput = {
  namedCurve: Scalars['String'];
};

export enum EncryptionAction {
  DECRYPT = 'DECRYPT',
  ENCRYPT = 'ENCRYPT',
}

export type HMACInput = {
  data: Scalars['String'];
  hashAlgo: Scalars['String'];
  secret: Scalars['String'];
};

export type HashInput = {
  data: Scalars['String'];
  hashAlgo: Scalars['String'];
};

export type KeyPairOutput = {
  __typename?: 'KeyPairOutput';
  privateKey: Scalars['String'];
  publicKey: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  asymmetricAction: CryptographicOutput;
  signData: CryptographicOutput;
  symmetricAction: CryptographicOutput;
  verifySignature: VerificationOutput;
};

export type MutationasymmetricActionArgs = {
  input: AsymmetricActionInput;
};

export type MutationsignDataArgs = {
  input: SignDataInput;
};

export type MutationsymmetricActionArgs = {
  input: SymmetricActionInput;
};

export type MutationverifySignatureArgs = {
  input: VerifyDataInput;
};

export type Query = {
  __typename?: 'Query';
  generateECPair: KeyPairOutput;
  generateHMAC: CryptographicOutput;
  generateIV: CryptographicOutput;
  generateRSAPair: KeyPairOutput;
  generateSymmetricKey: CryptographicOutput;
  hashData: CryptographicOutput;
};

export type QuerygenerateECPairArgs = {
  input: ECKeyPairInput;
};

export type QuerygenerateHMACArgs = {
  input: HMACInput;
};

export type QuerygenerateRSAPairArgs = {
  input: RSAKeyPairInput;
};

export type QueryhashDataArgs = {
  input: HashInput;
};

export type RSAKeyPairInput = {
  modulusLength: Scalars['Float'];
};

export type SignDataInput = {
  data: Scalars['String'];
  hashAlgo: Scalars['String'];
  key: Scalars['String'];
};

export type SymmetricActionInput = {
  action: EncryptionAction;
  algo: Scalars['String'];
  data: Scalars['String'];
  iv: Scalars['String'];
  key: Scalars['String'];
};

export type VerificationOutput = {
  __typename?: 'VerificationOutput';
  isValid: Scalars['Boolean'];
};

export type VerifyDataInput = {
  data: Scalars['String'];
  hashAlgo: Scalars['String'];
  key: Scalars['String'];
  signature: Scalars['String'];
};

export type HashDataQueryVariables = Exact<{
  input: HashInput;
}>;

export type HashDataQuery = {
  __typename?: 'Query';
  hashData: { __typename?: 'CryptographicOutput'; output: string };
};

export type GenerateHMACQueryVariables = Exact<{
  input: HMACInput;
}>;

export type GenerateHMACQuery = {
  __typename?: 'Query';
  generateHMAC: { __typename?: 'CryptographicOutput'; output: string };
};

export type GenerateSymmetricKeyQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GenerateSymmetricKeyQuery = {
  __typename?: 'Query';
  generateSymmetricKey: { __typename?: 'CryptographicOutput'; output: string };
};

export type GenerateIVQueryVariables = Exact<{ [key: string]: never }>;

export type GenerateIVQuery = {
  __typename?: 'Query';
  generateIV: { __typename?: 'CryptographicOutput'; output: string };
};

export type GenerateRSAPairQueryVariables = Exact<{
  input: RSAKeyPairInput;
}>;

export type GenerateRSAPairQuery = {
  __typename?: 'Query';
  generateRSAPair: {
    __typename?: 'KeyPairOutput';
    publicKey: string;
    privateKey: string;
  };
};

export type GenerateECPairQueryVariables = Exact<{
  input: ECKeyPairInput;
}>;

export type GenerateECPairQuery = {
  __typename?: 'Query';
  generateECPair: {
    __typename?: 'KeyPairOutput';
    publicKey: string;
    privateKey: string;
  };
};

export type SymmetricActionMutationVariables = Exact<{
  input: SymmetricActionInput;
}>;

export type SymmetricActionMutation = {
  __typename?: 'Mutation';
  symmetricAction: { __typename?: 'CryptographicOutput'; output: string };
};

export type AsymmetricActionMutationVariables = Exact<{
  input: AsymmetricActionInput;
}>;

export type AsymmetricActionMutation = {
  __typename?: 'Mutation';
  asymmetricAction: { __typename?: 'CryptographicOutput'; output: string };
};

export type SignDataMutationVariables = Exact<{
  input: SignDataInput;
}>;

export type SignDataMutation = {
  __typename?: 'Mutation';
  signData: { __typename?: 'CryptographicOutput'; output: string };
};

export type VerifySignatureMutationVariables = Exact<{
  input: VerifyDataInput;
}>;

export type VerifySignatureMutation = {
  __typename?: 'Mutation';
  verifySignature: { __typename?: 'VerificationOutput'; isValid: boolean };
};

export const HashDataDocument = gql`
  query HashData($input: HashInput!) {
    hashData(input: $input) {
      output
    }
  }
`;

/**
 * __useHashDataQuery__
 *
 * To run a query within a React component, call `useHashDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useHashDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHashDataQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useHashDataQuery(
  baseOptions: Apollo.QueryHookOptions<HashDataQuery, HashDataQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HashDataQuery, HashDataQueryVariables>(
    HashDataDocument,
    options
  );
}
export function useHashDataLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HashDataQuery,
    HashDataQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<HashDataQuery, HashDataQueryVariables>(
    HashDataDocument,
    options
  );
}
export type HashDataQueryHookResult = ReturnType<typeof useHashDataQuery>;
export type HashDataLazyQueryHookResult = ReturnType<
  typeof useHashDataLazyQuery
>;
export type HashDataQueryResult = Apollo.QueryResult<
  HashDataQuery,
  HashDataQueryVariables
>;
export const GenerateHMACDocument = gql`
  query GenerateHMAC($input: HMACInput!) {
    generateHMAC(input: $input) {
      output
    }
  }
`;

/**
 * __useGenerateHMACQuery__
 *
 * To run a query within a React component, call `useGenerateHMACQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateHMACQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateHMACQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateHMACQuery(
  baseOptions: Apollo.QueryHookOptions<
    GenerateHMACQuery,
    GenerateHMACQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GenerateHMACQuery, GenerateHMACQueryVariables>(
    GenerateHMACDocument,
    options
  );
}
export function useGenerateHMACLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenerateHMACQuery,
    GenerateHMACQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GenerateHMACQuery, GenerateHMACQueryVariables>(
    GenerateHMACDocument,
    options
  );
}
export type GenerateHMACQueryHookResult = ReturnType<
  typeof useGenerateHMACQuery
>;
export type GenerateHMACLazyQueryHookResult = ReturnType<
  typeof useGenerateHMACLazyQuery
>;
export type GenerateHMACQueryResult = Apollo.QueryResult<
  GenerateHMACQuery,
  GenerateHMACQueryVariables
>;
export const GenerateSymmetricKeyDocument = gql`
  query GenerateSymmetricKey {
    generateSymmetricKey {
      output
    }
  }
`;

/**
 * __useGenerateSymmetricKeyQuery__
 *
 * To run a query within a React component, call `useGenerateSymmetricKeyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateSymmetricKeyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateSymmetricKeyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateSymmetricKeyQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GenerateSymmetricKeyQuery,
    GenerateSymmetricKeyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GenerateSymmetricKeyQuery,
    GenerateSymmetricKeyQueryVariables
  >(GenerateSymmetricKeyDocument, options);
}
export function useGenerateSymmetricKeyLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenerateSymmetricKeyQuery,
    GenerateSymmetricKeyQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GenerateSymmetricKeyQuery,
    GenerateSymmetricKeyQueryVariables
  >(GenerateSymmetricKeyDocument, options);
}
export type GenerateSymmetricKeyQueryHookResult = ReturnType<
  typeof useGenerateSymmetricKeyQuery
>;
export type GenerateSymmetricKeyLazyQueryHookResult = ReturnType<
  typeof useGenerateSymmetricKeyLazyQuery
>;
export type GenerateSymmetricKeyQueryResult = Apollo.QueryResult<
  GenerateSymmetricKeyQuery,
  GenerateSymmetricKeyQueryVariables
>;
export const GenerateIVDocument = gql`
  query GenerateIV {
    generateIV {
      output
    }
  }
`;

/**
 * __useGenerateIVQuery__
 *
 * To run a query within a React component, call `useGenerateIVQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateIVQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateIVQuery({
 *   variables: {
 *   },
 * });
 */
export function useGenerateIVQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GenerateIVQuery,
    GenerateIVQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GenerateIVQuery, GenerateIVQueryVariables>(
    GenerateIVDocument,
    options
  );
}
export function useGenerateIVLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenerateIVQuery,
    GenerateIVQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GenerateIVQuery, GenerateIVQueryVariables>(
    GenerateIVDocument,
    options
  );
}
export type GenerateIVQueryHookResult = ReturnType<typeof useGenerateIVQuery>;
export type GenerateIVLazyQueryHookResult = ReturnType<
  typeof useGenerateIVLazyQuery
>;
export type GenerateIVQueryResult = Apollo.QueryResult<
  GenerateIVQuery,
  GenerateIVQueryVariables
>;
export const GenerateRSAPairDocument = gql`
  query GenerateRSAPair($input: RSAKeyPairInput!) {
    generateRSAPair(input: $input) {
      publicKey
      privateKey
    }
  }
`;

/**
 * __useGenerateRSAPairQuery__
 *
 * To run a query within a React component, call `useGenerateRSAPairQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateRSAPairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateRSAPairQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateRSAPairQuery(
  baseOptions: Apollo.QueryHookOptions<
    GenerateRSAPairQuery,
    GenerateRSAPairQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GenerateRSAPairQuery, GenerateRSAPairQueryVariables>(
    GenerateRSAPairDocument,
    options
  );
}
export function useGenerateRSAPairLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenerateRSAPairQuery,
    GenerateRSAPairQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GenerateRSAPairQuery,
    GenerateRSAPairQueryVariables
  >(GenerateRSAPairDocument, options);
}
export type GenerateRSAPairQueryHookResult = ReturnType<
  typeof useGenerateRSAPairQuery
>;
export type GenerateRSAPairLazyQueryHookResult = ReturnType<
  typeof useGenerateRSAPairLazyQuery
>;
export type GenerateRSAPairQueryResult = Apollo.QueryResult<
  GenerateRSAPairQuery,
  GenerateRSAPairQueryVariables
>;
export const GenerateECPairDocument = gql`
  query GenerateECPair($input: ECKeyPairInput!) {
    generateECPair(input: $input) {
      publicKey
      privateKey
    }
  }
`;

/**
 * __useGenerateECPairQuery__
 *
 * To run a query within a React component, call `useGenerateECPairQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateECPairQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateECPairQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateECPairQuery(
  baseOptions: Apollo.QueryHookOptions<
    GenerateECPairQuery,
    GenerateECPairQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GenerateECPairQuery, GenerateECPairQueryVariables>(
    GenerateECPairDocument,
    options
  );
}
export function useGenerateECPairLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GenerateECPairQuery,
    GenerateECPairQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GenerateECPairQuery, GenerateECPairQueryVariables>(
    GenerateECPairDocument,
    options
  );
}
export type GenerateECPairQueryHookResult = ReturnType<
  typeof useGenerateECPairQuery
>;
export type GenerateECPairLazyQueryHookResult = ReturnType<
  typeof useGenerateECPairLazyQuery
>;
export type GenerateECPairQueryResult = Apollo.QueryResult<
  GenerateECPairQuery,
  GenerateECPairQueryVariables
>;
export const SymmetricActionDocument = gql`
  mutation SymmetricAction($input: SymmetricActionInput!) {
    symmetricAction(input: $input) {
      output
    }
  }
`;
export type SymmetricActionMutationFn = Apollo.MutationFunction<
  SymmetricActionMutation,
  SymmetricActionMutationVariables
>;

/**
 * __useSymmetricActionMutation__
 *
 * To run a mutation, you first call `useSymmetricActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSymmetricActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [symmetricActionMutation, { data, loading, error }] = useSymmetricActionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSymmetricActionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SymmetricActionMutation,
    SymmetricActionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    SymmetricActionMutation,
    SymmetricActionMutationVariables
  >(SymmetricActionDocument, options);
}
export type SymmetricActionMutationHookResult = ReturnType<
  typeof useSymmetricActionMutation
>;
export type SymmetricActionMutationResult =
  Apollo.MutationResult<SymmetricActionMutation>;
export type SymmetricActionMutationOptions = Apollo.BaseMutationOptions<
  SymmetricActionMutation,
  SymmetricActionMutationVariables
>;
export const AsymmetricActionDocument = gql`
  mutation AsymmetricAction($input: AsymmetricActionInput!) {
    asymmetricAction(input: $input) {
      output
    }
  }
`;
export type AsymmetricActionMutationFn = Apollo.MutationFunction<
  AsymmetricActionMutation,
  AsymmetricActionMutationVariables
>;

/**
 * __useAsymmetricActionMutation__
 *
 * To run a mutation, you first call `useAsymmetricActionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAsymmetricActionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [asymmetricActionMutation, { data, loading, error }] = useAsymmetricActionMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAsymmetricActionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AsymmetricActionMutation,
    AsymmetricActionMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AsymmetricActionMutation,
    AsymmetricActionMutationVariables
  >(AsymmetricActionDocument, options);
}
export type AsymmetricActionMutationHookResult = ReturnType<
  typeof useAsymmetricActionMutation
>;
export type AsymmetricActionMutationResult =
  Apollo.MutationResult<AsymmetricActionMutation>;
export type AsymmetricActionMutationOptions = Apollo.BaseMutationOptions<
  AsymmetricActionMutation,
  AsymmetricActionMutationVariables
>;
export const SignDataDocument = gql`
  mutation SignData($input: SignDataInput!) {
    signData(input: $input) {
      output
    }
  }
`;
export type SignDataMutationFn = Apollo.MutationFunction<
  SignDataMutation,
  SignDataMutationVariables
>;

/**
 * __useSignDataMutation__
 *
 * To run a mutation, you first call `useSignDataMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignDataMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signDataMutation, { data, loading, error }] = useSignDataMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignDataMutation(
  baseOptions?: Apollo.MutationHookOptions<
    SignDataMutation,
    SignDataMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<SignDataMutation, SignDataMutationVariables>(
    SignDataDocument,
    options
  );
}
export type SignDataMutationHookResult = ReturnType<typeof useSignDataMutation>;
export type SignDataMutationResult = Apollo.MutationResult<SignDataMutation>;
export type SignDataMutationOptions = Apollo.BaseMutationOptions<
  SignDataMutation,
  SignDataMutationVariables
>;
export const VerifySignatureDocument = gql`
  mutation VerifySignature($input: VerifyDataInput!) {
    verifySignature(input: $input) {
      isValid
    }
  }
`;
export type VerifySignatureMutationFn = Apollo.MutationFunction<
  VerifySignatureMutation,
  VerifySignatureMutationVariables
>;

/**
 * __useVerifySignatureMutation__
 *
 * To run a mutation, you first call `useVerifySignatureMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifySignatureMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifySignatureMutation, { data, loading, error }] = useVerifySignatureMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useVerifySignatureMutation(
  baseOptions?: Apollo.MutationHookOptions<
    VerifySignatureMutation,
    VerifySignatureMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    VerifySignatureMutation,
    VerifySignatureMutationVariables
  >(VerifySignatureDocument, options);
}
export type VerifySignatureMutationHookResult = ReturnType<
  typeof useVerifySignatureMutation
>;
export type VerifySignatureMutationResult =
  Apollo.MutationResult<VerifySignatureMutation>;
export type VerifySignatureMutationOptions = Apollo.BaseMutationOptions<
  VerifySignatureMutation,
  VerifySignatureMutationVariables
>;
