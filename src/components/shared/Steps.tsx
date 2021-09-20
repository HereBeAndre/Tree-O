import { Steps } from 'antd';

import { EFormStep, STEP_TITLE_LIST } from '../../utils/constants';

const { Step } = Steps;

interface IFormSteps {
  stepNumber: EFormStep;
  stepData: JSX.Element[];
}

const FormSteps: React.FC<IFormSteps> = ({ stepNumber, stepData }) => {
  return (
    <Steps direction="vertical" current={stepNumber} style={{ minHeight: '100%' }}>
      {Array.from({ length: 3 }).map((item, i) => (
        <Step
          key={`${STEP_TITLE_LIST[i]}-${i + 1}`}
          title={STEP_TITLE_LIST[i]}
          icon={stepData[i]}
        />
      ))}
    </Steps>
  );
};

export default FormSteps;
