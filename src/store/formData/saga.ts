import { call, put, select, takeLatest } from 'redux-saga/effects';

import api from './api';

import { TGenericAction } from '../../schemas/actions_d';
import {
  TSaveFormValues,
  TStepOneFormValues,
  TStepThreeFormValues,
  TStepTwoFormValues,
} from '../../schemas/formData/formData_d';

import { formDataActions, uiActions, uiSelectors } from '../all';

import { EFormStep } from '../../utils/constants';

import types from './types';
import { Routes } from '../../components/routes/urls';
import history from '../../history';

// -------- WORKERS --------

function* doSaveStepOneForm(formValues: TStepOneFormValues) {
  const currentFormStep = yield select(uiSelectors.getFormStep);
  try {
    yield put(formDataActions.setStepOneFormMeta.setLoading());
    const res = yield call(api.saveFormValues, formValues);
    yield put(formDataActions.setStepOneFormData(res));
    yield put(formDataActions.setStepOneFormMeta.setSuccess(''));
    yield put(uiActions.setFormStep(currentFormStep + 1));
  } catch (err) {
    console.log(err);
  }
}

function* doSaveStepTwoForm(formValues: TStepTwoFormValues) {
  const currentFormStep = yield select(uiSelectors.getFormStep);
  try {
    yield put(formDataActions.setStepTwoFormMeta.setLoading());
    const res = yield call(api.saveFormValues, formValues);
    yield put(formDataActions.setStepTwoFormData(res));
    yield put(formDataActions.setStepTwoFormMeta.setSuccess(''));
    yield put(uiActions.setFormStep(currentFormStep + 1));
  } catch (err) {
    console.log(err);
  }
}

function* doSaveStepThreeForm(formValues: TStepThreeFormValues) {
  const currentFormStep = yield select(uiSelectors.getFormStep);
  try {
    yield put(formDataActions.setStepThreeFormMeta.setLoading());
    const res = yield call(api.saveFormValues, formValues);
    yield put(formDataActions.setStepThreeFormData(res));
    yield put(formDataActions.setStepThreeFormMeta.setSuccess(''));
    yield put(uiActions.setFormStep(currentFormStep + 1));
    yield history.push(Routes.SUMMARY);
  } catch (err) {
    console.log(err);
  }
}

function* doSaveFormValues(action: TGenericAction<TSaveFormValues>) {
  const { payload: formValues } = action;
  const currentFormStep = yield select(uiSelectors.getFormStep);

  switch (currentFormStep) {
    case EFormStep.STEP_1:
      yield call(doSaveStepOneForm, formValues as TStepOneFormValues);
      break;
    case EFormStep.STEP_2:
      yield call(doSaveStepTwoForm, formValues as TStepTwoFormValues);
      break;
    case EFormStep.STEP_3:
      yield call(doSaveStepThreeForm, formValues as TStepThreeFormValues);
      break;
    default:
      yield null;
  }
}

// -------- WATCHERS --------

function* watchDoSaveFormValues() {
  yield takeLatest(types.DO_SAVE_FORM_VALUES, doSaveFormValues);
}

export default [watchDoSaveFormValues()];
