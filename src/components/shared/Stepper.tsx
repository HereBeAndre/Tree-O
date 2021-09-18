import { Input, Steps, Row, Col, Form } from 'antd';

import CustomForm from './Form';

const { Step } = Steps;

const steps = [
  <CustomForm
    onFormSubmit={() => console.log('Submit FORM 1')}
    loading={false}
    submitButtonText="Next"
  >
    <Form.Item
      name="name"
      label="What's your first name?"
      rules={[{ required: true, message: 'Your first name is required' }]}
    >
      <Input autoComplete="off" placeholder="Enter your first name" />
    </Form.Item>
  </CustomForm>,
  <CustomForm
    onFormSubmit={() => console.log('Submit FORM 2')}
    loading={false}
    disabled
    submitButtonText="Next"
  >
    <Form.Item
      name="country"
      label="Where would you like to plant your tree?"
      rules={[{ required: true, message: 'Please select a country' }]}
    >
      <Input autoComplete="off" placeholder="Enter a country" disabled />
    </Form.Item>
  </CustomForm>,
  <CustomForm
    onFormSubmit={() => console.log('Submit FORM 3')}
    loading={false}
    disabled
    submitButtonText="Done"
  >
    <Form.Item
      name="tree"
      label="Pick your tree"
      rules={[{ required: true, message: 'You must pick a tree' }]}
    >
      <Input autoComplete="off" placeholder="It's your call :)" disabled />
    </Form.Item>
  </CustomForm>,
];

const Stepper: React.FC = () => {
  return (
    <Row>
      <Col span={6}>
        <Steps direction="vertical" current={0}>
          {steps.map((item, i) => (
            <Step key={item[i]} title={`Step ${i + 1}`} />
          ))}
        </Steps>
      </Col>
      <Col span={18}>
        <div className="steps-content">
          {steps[0]}
          {steps[1]}
          {steps[2]}
        </div>
      </Col>
    </Row>
  );
};

export default Stepper;
