import { Result, Button, Descriptions, Card, Row, Col } from 'antd';

import Navbar from '../layout/Navbar';

import { TFormData } from '../../schemas/formData/formData_d';

import { generateRandomXDigitsNumber } from '../../utils/functions';
import i18n from '../../i18n';

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
                  title={`${i18n.OPERATION_SUCCESSFUL}!`}
                  bordered
                  column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                >
                  {data.map((i) => {
                    return (
                      <>
                        <Descriptions.Item label={i18n.YOUR_NAME}> {i.name}</Descriptions.Item>
                        <Descriptions.Item label={i18n.DESTINATION_COUNTRY}>
                          {' '}
                          {i.country}
                        </Descriptions.Item>
                        <Descriptions.Item label={i18n.SELECTED_SPECIES}>
                          {' '}
                          {i.tree}
                        </Descriptions.Item>
                      </>
                    );
                  })}
                </Descriptions>
              }
              subTitle={`${i18n.ORDER_NUMBER} ${generateRandomXDigitsNumber(16)} - ${i18n.THANKS}!`}
              extra={[
                <Button key="routeToHome" size="middle" type="primary" onClick={onBack}>
                  {i18n.BACK_HOME}
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
