import { TErrorType } from './errors_d';

export enum EStatus {
  LOADING = 'loading',
  SUCCESS = 'success',
  FAILURE = 'failure',
  NONE = 'none',
}

export type TDataMeta<T = undefined> = {
  item?: T;
  status: EStatus;
  error?: TErrorType;
  message: string;
};
