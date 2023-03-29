import { combineReducers, compose, legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import loadServicesReducer from "../reducers/loadServicesReducer";
import loadCurrentServiceReducer from "../reducers/loadCurrentServiceReducer";
import rootSaga from "../saga";

const reducer = combineReducers({
  loadServices: loadServicesReducer,
  loadCurrentService: loadCurrentServiceReducer
})

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(rootSaga)

export default store;