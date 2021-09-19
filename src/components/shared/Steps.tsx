import { Steps } from 'antd';
import { SmileTwoTone, HomeTwoTone, HeartTwoTone } from '@ant-design/icons';

import { EFormStep, STEP_TITLE_LIST } from '../../utils/constants';

const STEP_ICON_LIST = [
  <SmileTwoTone twoToneColor="#3ed367" style={{ fontSize: '2rem' }} />,
  <HomeTwoTone twoToneColor="#3ed367" style={{ fontSize: '2rem' }} />,
  <HeartTwoTone twoToneColor="#3ed367" style={{ fontSize: '2rem' }} />,
];
const { Step } = Steps;

interface IFormSteps {
  stepNumber: EFormStep;
}

const FormSteps: React.FC<IFormSteps> = ({ stepNumber }) => {
  return (
    <Steps direction="vertical" current={stepNumber} style={{ minHeight: '100%' }}>
      {Array.from({ length: 3 }).map((item, i) => (
        <Step
          key={`${STEP_TITLE_LIST[i]}-${i + 1}`}
          title={STEP_TITLE_LIST[i]}
          icon={STEP_ICON_LIST[i]}
        />
      ))}
    </Steps>
  );
};

export default FormSteps;
