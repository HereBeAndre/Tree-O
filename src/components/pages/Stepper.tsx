import { Input, Row, Col, Form, Card, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { formDataActions, formDataSelectors, uiSelectors } from '../../store/all';

import {
  TStepOneFormValues,
  TStepThreeFormValues,
  TStepTwoFormValues,
} from '../../schemas/formData/formData_d';

import Navbar from '../layout/Navbar';
import CustomForm from '../shared/Form';

import { EStatus } from '../../schemas/generics_d';
import FormSteps from '../shared/Steps';

const { Title } = Typography;

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
    <>
      <Navbar />
      <Row>
        <Col xs={0} sm={0} md={8} lg={8} xl={6} style={{ minHeight: '100vh', padding: '4rem' }}>
          <FormSteps stepNumber={currentFormStep} />
        </Col>
        <Col xs={24} sm={24} md={16} lg={16} xl={14} style={{ padding: '4rem' }}>
          <Card title={<Title level={3}>Pick your tree!</Title>}>
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
                label="Choose a tree"
                rules={[{ required: true, message: 'You must pick a tree' }]}
              >
                <Input
                  autoComplete="off"
                  placeholder="Papaya, Lemon, Neem, etc..."
                  disabled={secondStepFormMetaStatus !== EStatus.SUCCESS}
                />
              </Form.Item>
            </CustomForm>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Stepper;