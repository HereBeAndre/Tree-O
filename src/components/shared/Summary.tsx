import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { formDataSelectors } from '../../store/all';

import SuccessDisplay from './SuccessDisplay';

import { TFormData } from '../../schemas/formData/formData_d';

const Summary: React.FC = () => {
  const stepOneData = useSelector(formDataSelectors.getFirstStepFormData);
  const stepTwoData = useSelector(formDataSelectors.getSecondStepFormData);
  const stepThreeData = useSelector(formDataSelectors.getThirdStepFormData);

  const [dataSummary, setDataSummary] = useState<TFormData[]>([]);

  useEffect(() => {
    setDataSummary([{ ...stepOneData, ...stepTwoData, ...stepThreeData }]);
  }, []);

  return <SuccessDisplay data={dataSummary} />;
};

export default Summary;
