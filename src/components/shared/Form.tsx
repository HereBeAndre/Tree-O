import { CSSProperties } from 'react';
import { Form, Button, Row } from 'antd';

interface IFormProps {
  onFormSubmit: (values) => void;
  loading: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  submitButtonText: string;
  customStyle?: CSSProperties;
}

const CustomForm: React.FC<IFormProps> = ({
  onFormSubmit,
  loading,
  children,
  disabled,
  submitButtonText,
  customStyle = { width: '100%' },
}) => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="custom-form"
      layout="vertical"
      onFinish={onFormSubmit}
      style={customStyle}
    >
      {children}
      <Row justify="end">
        <Button
          size="middle"
          type="primary"
          htmlType="submit"
          loading={loading}
          disabled={disabled}
        >
          {submitButtonText}
        </Button>
      </Row>
    </Form>
  );
};

export default CustomForm;
