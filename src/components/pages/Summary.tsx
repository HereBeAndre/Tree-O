import { useDispatch, useSelector } from 'react-redux';
import history from '../../history';

import { Routes } from '../routes/urls';

import { formDataActions, formDataSelectors } from '../../store/all';

import SuccessDisplay from '../shared/SuccessDisplay';

const Summary: React.FC = () => {
  const dispatch = useDispatch();
  // ------ Selectors ------
  const stepOneData = useSelector(formDataSelectors.getFirstStepFormData);
  const stepTwoData = useSelector(formDataSelectors.getSecondStepFormData);
  const stepThreeData = useSelector(formDataSelectors.getThirdStepFormData);

  // ------ Callbacks ------
  const onBackHome = () => {
    dispatch(formDataActions.setClearFormData());
    history.push(Routes.HOME);
  };

  // ------ JSX return  ------
  return (
    <SuccessDisplay
      data={[{ ...stepOneData, ...stepTwoData, ...stepThreeData }]}
      onBack={onBackHome}
    />
  );
};

export default Summary;
