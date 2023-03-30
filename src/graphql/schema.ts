import { ErrorInterceptor } from '@graphql/middlewares/error.interceptor';
import { CryptoResolver } from '@graphql/resolvers/Crypto.resolver';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

const schema = await buildSchema({
  resolvers: [CryptoResolver],
  globalMiddlewares: [ErrorInterceptor],
  emitSchemaFile: process.env.NODE_ENV === 'development' ? true : false,
  container: Container,
});

export default schema;
