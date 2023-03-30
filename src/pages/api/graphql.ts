import schema from '@graphql/schema';
import { createYoga, maskError } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';

export default createYoga<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({
  schema,
  graphqlEndpoint: '/api/graphql',
  maskedErrors: {
    maskError(error: any, message, isDev) {
      if (error?.extensions?.code === 'ARGUMENT_VALIDATION_ERROR') {
        return error;
      }

      return maskError(error, message, isDev);
    },
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};
