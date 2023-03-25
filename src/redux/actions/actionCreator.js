import * as actionType from "./actionType";

export const loadServices = (id = 'all') => {
  if (id == 'all') {
    return {type: actionType.LOAD_SERVICES}
  } else {
    return {type: actionType.LOAD_CURRENT_SERVICE, payload: id}
  }
}

export const loadServicesSuccess = (data) => {
  return {type: actionType.LOAD_SERVICES_SUCCESS, payload: data}
}

export const loadServicesFailed = () => {
  return {type: actionType.LOAD_SERVICES_FAILED}
}

export const loadCurrentServiceSuccess = (data) => {
  return {type: actionType.LOAD_CURRENT_SERVICE_SUCCESS, payload: data}
}

export const loadCurrentServiceFailed = () => {
  return {type: actionType.LOAD_CURRENT_SERVICE_FAILED}
}