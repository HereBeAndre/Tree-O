import { CSSProperties } from 'react';
import { Steps } from 'antd';

import { EFormStep, STEP_TITLE_LIST } from '../../utils/constants';

const { Step } = Steps;

interface IFormSteps {
  stepNumber: EFormStep;
  stepIcon: JSX.Element[];
  stepsDirection: 'vertical' | 'horizontal';
  showStepTitle?: boolean;
  style?: CSSProperties;
}

const FormSteps: React.FC<IFormSteps> = ({
  stepNumber,
  stepIcon,
  stepsDirection,
  showStepTitle = true,
  style,
}) => (
  <Steps direction={stepsDirection} current={stepNumber} style={style}>
    {Array.from({ length: 3 }).map((item, i) => (
      <Step
        key={`${STEP_TITLE_LIST[i]}-${i + 1}`}
        title={showStepTitle ? STEP_TITLE_LIST[i] : null}
        icon={stepIcon[i]}
        style={{ fontSize: '10px' }}
      />
    ))}
  </Steps>
);

export default FormSteps;
