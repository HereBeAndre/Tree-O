import { Form, Button, Row, Col } from 'antd';

interface IFormProps {
  onFormSubmit: (values) => void;
  loading: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  submitButtonText: string;
}

const CustomForm: React.FC<IFormProps> = ({
  onFormSubmit,
  loading,
  children,
  disabled,
  submitButtonText,
}) => {
  const [form] = Form.useForm();

  return (
    <Row>
      <Col>
        <Form form={form} name="custom-form" layout="vertical" onFinish={onFormSubmit}>
          {children}
          <Row justify="end">
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={disabled}
            >
              {submitButtonText}
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default CustomForm;
