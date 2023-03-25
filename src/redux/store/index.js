import { combineReducers, compose, legacy_createStore, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import loadServicesReducer from "../reducers/loadServicesReducer";
import loadCurrentServiceReducer from "../reducers/loadCurrentServiceReducer";
import { loadServicesEpic, loadCurrentServiceEpic } from "../epics";

const reducer = combineReducers({
  loadServices: loadServicesReducer,
  loadCurrentService: loadCurrentServiceReducer
})

const rootEpic = combineEpics(
  loadServicesEpic,
  loadCurrentServiceEpic
)

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)

epicMiddleware.run(rootEpic)

export default store;