import { Result, Button, Descriptions, Card, Row, Col } from 'antd';

import Navbar from '../layout/Navbar';

import { TFormData } from '../../schemas/formData/formData_d';

import { generateRandomXDigitsNumber } from '../../utils/functions';

interface ISuccessDisplayProps {
  data: TFormData[];
  onBack: () => void;
}

const SuccessDisplay: React.FC<ISuccessDisplayProps> = ({ data, onBack }) => {
  return (
    <>
      <Navbar />
      <Row justify="center" align="middle" style={{ height: '80vh' }}>
        <Col xs={24} sm={24} md={14} lg={14} xl={10}>
          <Card>
            <Result
              status="success"
              title={
                <Descriptions
                  title="Operation was successful!"
                  bordered
                  column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  {data.map((i) => {
                    return (
                      <>
                        <Descriptions.Item label="Your name"> {i.name}</Descriptions.Item>
                        <Descriptions.Item label="Destination country">
                          {' '}
                          {i.country}
                        </Descriptions.Item>
                        <Descriptions.Item label="Selected species"> {i.tree}</Descriptions.Item>
                      </>
                    );
                  })}
                </Descriptions>
              }
              subTitle={`Order number: ${generateRandomXDigitsNumber(
                16,
              )} - Thanks for helping our Planet!`}
              extra={[
                <Button key="routeToHome" size="middle" type="primary" onClick={onBack}>
                  Back to Home
                </Button>,
              ]}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default SuccessDisplay;
