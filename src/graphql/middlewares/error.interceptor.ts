import { GraphQLError } from 'graphql';
import { MiddlewareFn } from 'type-graphql';

export const ErrorInterceptor: MiddlewareFn<any> = async (
  { context, info },
  next
) => {
  try {
    return await next();
  } catch (err) {
    if (err !== null && typeof err === 'object') {
      if ('validationErrors' in err) {
        throw new GraphQLError(
          'Validation failed',
          null,
          null,
          null,
          null,
          null,
          {
            code: 'ARGUMENT_VALIDATION_ERROR',
            validationErrors: err.validationErrors,
          }
        );
      } else {
        console.log(
          '\x1b[31m',
          `SERVER ERROR: ${new Date().toLocaleTimeString()}\n`,
          '\x1b[33m',
          err,
          'CONTEXT: \n\x1b[32m',
          context,
          'INFO: \n\x1b[35m',
          info
        );
      }
      throw err;
    } else {
      throw err;
    }
  }
};
