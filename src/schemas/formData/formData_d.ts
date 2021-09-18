import { TDataMeta } from '../generics_d';

export type TStepOneFormValues = {
  name: string;
};

export type TStepTwoFormValues = {
  country: string;
};

export type TStepThreeFormValues = {
  tree: string;
};

export type TSaveFormValues = Partial<
  TStepOneFormValues | TStepTwoFormValues | TStepThreeFormValues
>;

export type TFormData = {
  name: string;
  country: string;
  tree: string;
};

export type State = {
  firstStepFormData: TStepOneFormValues;
  secondStepFormData: TStepTwoFormValues;
  thirdStepFormData: TStepThreeFormValues;
  firstStepFormMeta: TDataMeta;
  secondStepFormMeta: TDataMeta;
  thirdStepFormMeta: TDataMeta;
};
