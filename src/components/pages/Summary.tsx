import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import history from '../../history';

import { Routes } from '../routes/urls';

import { formDataSelectors } from '../../store/all';

import SuccessDisplay from '../shared/SuccessDisplay';

import { TFormData } from '../../schemas/formData/formData_d';

const Summary: React.FC = () => {
  // ------ Internal State ------
  const [dataSummary, setDataSummary] = useState<TFormData[]>([]);

  // ------ Selectors ------
  const stepOneData = useSelector(formDataSelectors.getFirstStepFormData);
  const stepTwoData = useSelector(formDataSelectors.getSecondStepFormData);
  const stepThreeData = useSelector(formDataSelectors.getThirdStepFormData);

  // ------ Callbacks ------
  const onBackHome = () => {
    history.push(Routes.HOME);
  };

  // ------ Side Effects ------
  useEffect(() => {
    setDataSummary([{ ...stepOneData, ...stepTwoData, ...stepThreeData }]);
  }, []);

  // ------ JSX return  ------
  return <SuccessDisplay data={dataSummary} onBack={onBackHome} />;
};

export default Summary;
