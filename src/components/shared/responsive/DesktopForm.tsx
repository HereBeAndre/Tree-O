import { useDispatch, useSelector } from 'react-redux';

import { Input, Row, Col, Form, Card, Typography, Select } from 'antd';
import { SmileTwoTone, HomeTwoTone, HeartTwoTone } from '@ant-design/icons';

import { formDataActions, formDataSelectors, uiSelectors } from '../../../store/all';

import {
  TStepOneFormValues,
  TStepThreeFormValues,
  TStepTwoFormValues,
} from '../../../schemas/formData/formData_d';

import CustomForm from '../Form';
import FormSteps from '../Steps';

import { EStatus } from '../../../schemas/generics_d';

import { mockGeoData, speciesData } from '../../../utils/mockData';

import i18n from '../../../i18n';

const { Title } = Typography;
const { Option } = Select;

export const STEP_ICON_LIST = [
  <SmileTwoTone twoToneColor="#3ed367" style={{ fontSize: '2rem' }} />,
  <HomeTwoTone twoToneColor="#3ed367" style={{ fontSize: '2rem' }} />,
  <HeartTwoTone twoToneColor="#3ed367" style={{ fontSize: '2rem' }} />,
];

export const renderOptionComponent = (data: string[]) => {
  return data.map((d) => <Option value={d}>{d}</Option>);
};

const DesktopForm: React.FC = () => {
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
      <Col xs={0} sm={0} md={8} lg={8} xl={6} style={{ minHeight: '100vh', padding: '4rem' }}>
        <FormSteps
          stepNumber={currentFormStep}
          stepIcon={STEP_ICON_LIST}
          stepsDirection="vertical"
          style={{ minHeight: '100%' }}
        />
      </Col>
      <Col xs={24} sm={24} md={16} lg={16} xl={14} style={{ padding: '4rem' }}>
        <Card title={<Title level={3}>{i18n.PICK_YOUR_TREE}!</Title>}>
          <CustomForm
            onFormSubmit={onStepOneFormSubmit}
            loading={firstStepFormMetaStatus === EStatus.LOADING}
            disabled={firstStepFormMetaStatus === EStatus.SUCCESS}
            submitButtonText={i18n.NEXT}
          >
            <Form.Item
              name="name"
              label={`${i18n.FIRST_NAME_LABEL}?`}
              rules={[{ required: true, message: i18n.FIRST_NAME_REQUIRED }]}
            >
              <Input autoComplete="off" placeholder={i18n.FIRST_NAME_PLACEHOLDER} />
            </Form.Item>
          </CustomForm>
          <CustomForm
            onFormSubmit={onStepTwoFormSubmit}
            loading={secondStepFormMetaStatus === EStatus.LOADING}
            disabled={
              firstStepFormMetaStatus !== EStatus.SUCCESS ||
              secondStepFormMetaStatus === EStatus.SUCCESS
            }
            submitButtonText={i18n.NEXT}
          >
            <Form.Item
              name="country"
              label={`${i18n.SELECT_COUNTRY_LABEL}?`}
              rules={[{ required: true, message: i18n.COUNTRY_REQUIRED }]}
            >
              <Select
                disabled={firstStepFormMetaStatus !== EStatus.SUCCESS}
                placeholder={i18n.COUNTRY_PLACEHOLDER}
              >
                {renderOptionComponent(mockGeoData)}
              </Select>
            </Form.Item>
          </CustomForm>
          <CustomForm
            onFormSubmit={onStepThreeFormSubmit}
            loading={thirdStepFormMetaStatus === EStatus.LOADING}
            disabled={secondStepFormMetaStatus !== EStatus.SUCCESS}
            submitButtonText={i18n.DONE}
          >
            <Form.Item
              name="tree"
              label={i18n.SPECIES_LABEL}
              rules={[{ required: true, message: i18n.SPECIES_REQUIRED }]}
            >
              <Select
                disabled={secondStepFormMetaStatus !== EStatus.SUCCESS}
                placeholder={i18n.SPECIES_PLACEHOLDER}
              >
                {renderOptionComponent(speciesData)}
              </Select>
            </Form.Item>
          </CustomForm>
        </Card>
      </Col>
    </Row>
  );
};

export default DesktopForm;
