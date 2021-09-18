import { TDataMeta } from '../generics_d';

export type State = {
  // FIXME: Implement correct type casting
  formData: object;
  firstStepFormMeta: TDataMeta;
  secondStepFormMeta: TDataMeta;
  thirdStepFormMeta: TDataMeta;
};
