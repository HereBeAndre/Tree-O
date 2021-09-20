import { message as antdMessage } from 'antd';

import { TGenericAction } from '../schemas/actions_d';
import { EStatus, TDataMeta } from '../schemas/generics_d';

import { generateDefaultError, serializeError } from './errors';

export type MetaActionGeneratorType<T> = {
  setLoading: () => TGenericAction<TDataMeta<T>>;
  setSuccess: (message: string) => TGenericAction<TDataMeta<T>>;
  setError: (error: Error) => TGenericAction<TDataMeta<T>>;
};

export const defaultDataMeta: TDataMeta = {
  message: '',
  status: EStatus.NONE,
  error: generateDefaultError({ message: '' }),
};

export function metaActionPayload<T>(payload: Partial<TDataMeta<T>>): TDataMeta<T> {
  return { ...(defaultDataMeta as TDataMeta), ...payload };
}

export function metaActionGenerator<T>(actionType: string): MetaActionGeneratorType<T> {
  return {
    setLoading: () => ({
      type: actionType,
      payload: metaActionPayload({ status: EStatus.LOADING }),
    }),
    setSuccess: (message) => ({
      type: actionType,
      // @ts-ignore
      payload: metaActionPayload({ message, status: EStatus.SUCCESS, item: undefined }),
    }),
    setError: (error) => {
      const err = serializeError(error);
      antdMessage.error(err.message);
      return {
        type: actionType,
        payload: metaActionPayload({ status: EStatus.FAILURE, error: err }),
      };
    },
  };
}
