import { Result, Button, Descriptions, Card, Row, Col } from 'antd';
import { TFormData } from '../../schemas/formData/formData_d';

import { generateRandomXDigitsNumber } from '../../utils/functions';

interface ISuccessDisplayProps {
  data: TFormData[];
  onBack: () => void;
}

const SuccessDisplay: React.FC<ISuccessDisplayProps> = ({ data, onBack }) => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Card>
          <Result
            status="success"
            title={
              <Descriptions title="Operation was successful! Here's your order details:">
                {data.map((i) => {
                  return (
                    <>
                      <Descriptions.Item label="Your name"> {i.name}</Descriptions.Item>
                      <Descriptions.Item label="Destination country">
                        {' '}
                        {i.country}
                      </Descriptions.Item>
                      <Descriptions.Item label="Tree"> {i.tree}</Descriptions.Item>
                    </>
                  );
                })}
              </Descriptions>
            }
            subTitle={`Order number: ${generateRandomXDigitsNumber(
              16,
            )} - Thanks for helping our Planet!`}
            extra={[
              <Button key="routeToHome" onClick={onBack}>
                Back to Home
              </Button>,
            ]}
          />
        </Card>
      </Col>
    </Row>
  );
};

export default SuccessDisplay;
