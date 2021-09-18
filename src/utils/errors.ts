import { TErrorType } from '../schemas/errors_d';

export const generateDefaultError = (err?: Partial<TErrorType>): TErrorType => ({
  message: 'Something went wrong...',
  name: '',
  ...err,
});

export function serializeError(err: Error): TErrorType {
  return err && err?.message
    ? {
        message: err.message,
        name: err.name,
        stack: err.stack,
      }
    : generateDefaultError();
}
