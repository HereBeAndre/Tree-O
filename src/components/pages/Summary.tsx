import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../history';

import { Routes } from '../routes/urls';

import { formDataActions, formDataSelectors, uiActions } from '../../store/all';

import SuccessDisplay from '../shared/SuccessDisplay';

import { TFormData } from '../../schemas/formData/formData_d';

const Summary: React.FC = () => {
  const dispatch = useDispatch();

  const stepOneData = useSelector(formDataSelectors.getFirstStepFormData);
  const stepTwoData = useSelector(formDataSelectors.getSecondStepFormData);
  const stepThreeData = useSelector(formDataSelectors.getThirdStepFormData);

  const [dataSummary, setDataSummary] = useState<TFormData[]>([]);

  const onBackHome = () => {
    dispatch(uiActions.setClearUiData());
    dispatch(formDataActions.setClearFormData());
    history.push(Routes.HOME);
  };

  useEffect(() => {
    setDataSummary([{ ...stepOneData, ...stepTwoData, ...stepThreeData }]);
  }, []);

  return <SuccessDisplay data={dataSummary} onBack={onBackHome} />;
};

export default Summary;
