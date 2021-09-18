import { Input, Steps, Row, Col, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { formDataActions, formDataSelectors, uiSelectors } from '../../store/all';

import {
  TStepOneFormValues,
  TStepThreeFormValues,
  TStepTwoFormValues,
} from '../../schemas/formData/formData_d';

import CustomForm from './Form';
import { EStatus } from '../../schemas/generics_d';

const { Step } = Steps;

const Stepper: React.FC = () => {
  const dispatch = useDispatch();

  const currentFormStep = useSelector(uiSelectors.getFormStep);

  const firstStepFormMetaStatus = useSelector(formDataSelectors.getFirstStepFormMetaStatus);
  const secondStepFormMetaStatus = useSelector(formDataSelectors.getSecondStepFormMetaStatus);
  const thirdStepFormMetaStatus = useSelector(formDataSelectors.getThirdStepFormMetaStatus);

  const onStepOneFormSubmit = (stepOneFormValues: TStepOneFormValues) => {
    dispatch(formDataActions.doSaveFormValues(stepOneFormValues));
  };

  const onStepTwoFormSubmit = (stepTwoFormValues: TStepTwoFormValues) => {
    dispatch(formDataActions.doSaveFormValues(stepTwoFormValues));
  };

  const onStepThreeFormSubmit = (stepThreeFormValues: TStepThreeFormValues) => {
    dispatch(formDataActions.doSaveFormValues(stepThreeFormValues));
  };

  return (
    <Row>
      <Col span={6}>
        <Steps direction="vertical" current={currentFormStep}>
          {Array.from({ length: 3 }).map((item, i) => (
            <Step key={`Step ${i + 1}`} title={`Step ${i + 1}`} />
          ))}
        </Steps>
      </Col>
      <Col span={18}>
        <div className="steps-content">
          <CustomForm
            onFormSubmit={onStepOneFormSubmit}
            loading={firstStepFormMetaStatus === EStatus.LOADING}
            disabled={firstStepFormMetaStatus === EStatus.SUCCESS}
            submitButtonText="Next"
          >
            <Form.Item
              name="name"
              label="What's your first name?"
              rules={[{ required: true, message: 'Your first name is required' }]}
            >
              <Input autoComplete="off" placeholder="Enter your first name" />
            </Form.Item>
          </CustomForm>
          <CustomForm
            onFormSubmit={onStepTwoFormSubmit}
            loading={secondStepFormMetaStatus === EStatus.LOADING}
            disabled={
              firstStepFormMetaStatus !== EStatus.SUCCESS ||
              secondStepFormMetaStatus === EStatus.SUCCESS
            }
            submitButtonText="Next"
          >
            <Form.Item
              name="country"
              label="Where would you like to plant your tree?"
              rules={[{ required: true, message: 'Please select a country' }]}
            >
              <Input
                autoComplete="off"
                placeholder="Enter a country"
                disabled={firstStepFormMetaStatus !== EStatus.SUCCESS}
              />
            </Form.Item>
          </CustomForm>
          <CustomForm
            onFormSubmit={onStepThreeFormSubmit}
            loading={thirdStepFormMetaStatus === EStatus.LOADING}
            disabled={secondStepFormMetaStatus !== EStatus.SUCCESS}
            submitButtonText="Done"
          >
            <Form.Item
              name="tree"
              label="Pick your tree"
              rules={[{ required: true, message: 'You must pick a tree' }]}
            >
              <Input
                autoComplete="off"
                placeholder="It's your call :)"
                disabled={secondStepFormMetaStatus !== EStatus.SUCCESS}
              />
            </Form.Item>
          </CustomForm>
        </div>
      </Col>
    </Row>
  );
};

export default Stepper;
