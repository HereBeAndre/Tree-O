import { all } from 'redux-saga/effects';
import { saga as formDataSaga } from './formData';

export default function* rootSaga() {
  yield all([...formDataSaga]);
}
