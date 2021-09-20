import { useDispatch, useSelector } from 'react-redux';

import { Col, Form, Input, Select, Card, Typography } from 'antd';

import { formDataActions, formDataSelectors, uiSelectors } from '../../../store/all';

import {
  TStepOneFormValues,
  TStepThreeFormValues,
  TStepTwoFormValues,
} from '../../../schemas/formData/formData_d';
import { EStatus } from '../../../schemas/generics_d';

import FormSteps from '../Steps';
import CustomForm from '../Form';
import { renderOptionComponent, STEP_ICON_LIST } from './DesktopForm';

import { EFormStep, STEP_TITLE_LIST } from '../../../utils/constants';
import { mockGeoData, mockSpeciesData } from '../../../utils/mockData';

import i18n from '../../../i18n';

const { Title } = Typography;

const MobileForm: React.FC = () => {
  const dispatch = useDispatch();

  // ------ Selectors ------
  const currentFormStep = useSelector(uiSelectors.getFormStep);
  const firstStepFormMetaStatus = useSelector(formDataSelectors.getFirstStepFormMetaStatus);
  const secondStepFormMetaStatus = useSelector(formDataSelectors.getSecondStepFormMetaStatus);
  const thirdStepFormMetaStatus = useSelector(formDataSelectors.getThirdStepFormMetaStatus);

  // ------ Callbacks ------
  const onStepOneFormSubmit = (stepOneFormValues: TStepOneFormValues) => {
    dispatch(formDataActions.doSaveFormValues(stepOneFormValues));
  };

  const onStepTwoFormSubmit = (stepTwoFormValues: TStepTwoFormValues) => {
    dispatch(formDataActions.doSaveFormValues(stepTwoFormValues));
  };

  const onStepThreeFormSubmit = (stepThreeFormValues: TStepThreeFormValues) => {
    dispatch(formDataActions.doSaveFormValues(stepThreeFormValues));
  };

  // ------ JSX return ------
  return (
    <>
      <FormSteps
        stepNumber={currentFormStep}
        stepIcon={STEP_ICON_LIST}
        stepsDirection="horizontal"
        showStepTitle={false}
        style={{ padding: '1rem 2rem' }}
      />
      <Col style={{ padding: '4rem' }}>
        {currentFormStep === EFormStep.STEP_1 && (
          <Card title={<Title level={3}>{STEP_TITLE_LIST[0]}</Title>}>
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
          </Card>
        )}
        {currentFormStep === EFormStep.STEP_2 && (
          <Card title={<Title level={3}>{STEP_TITLE_LIST[1]}</Title>}>
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
          </Card>
        )}
        {currentFormStep === EFormStep.STEP_3 && (
          <Card title={<Title level={3}>{STEP_TITLE_LIST[2]}</Title>}>
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
                  {renderOptionComponent(mockSpeciesData)}
                </Select>
              </Form.Item>
            </CustomForm>
          </Card>
        )}
      </Col>
    </>
  );
};

export default MobileForm;
