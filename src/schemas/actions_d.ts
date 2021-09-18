export type TSimpleAction = {
  type: string;
};

export type TGenericAction<T> = {
  type: string;
  payload: T;
};

export type TCommandAction = TGenericAction<string>;

export type TBooleanAction = TGenericAction<boolean>;
