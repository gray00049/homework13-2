import { spawn, takeLatest, retry, put } from "@redux-saga/core/effects"
import * as actionType from '../actions/actionType'
import * as actions from '../actions/actionCreator'
import loadService from "../../api"

function* workerLoadServiceSaga() {
  try {
    const data = yield retry(3, 1000, loadService)
    yield put(actions.loadServicesSuccess(data))
  } catch {
    yield put(actions.loadServicesFailed())
  }
}

function* workerLoadCurrentServiceSaga(action) {
  try {
    const data = yield retry(3, 1000, loadService, action.payload.id)
    yield put(actions.loadCurrentServiceSuccess(data))
  } catch {
    yield put(actions.loadCurrentServiceFailed())
  }
}

function* handleLoadCurrentService() {
  yield takeLatest(actionType.LOAD_CURRENT_SERVICE, workerLoadCurrentServiceSaga)
}

function* handleLoadServicesSaga () {
  yield takeLatest(actionType.LOAD_SERVICES, workerLoadServiceSaga);
}

export default function* rootSaga() {
  yield spawn(handleLoadServicesSaga);
  yield spawn(handleLoadCurrentService);
}