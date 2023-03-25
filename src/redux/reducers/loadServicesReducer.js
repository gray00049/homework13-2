import { LOAD_SERVICES, LOAD_SERVICES_FAILED, LOAD_SERVICES_SUCCESS } from "../actions/actionType"

const initialState = {
  data: [],
  loading: false,
  error: false
} 

export default function loadServicesReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_SERVICES:
      return {loading: true, error: false, data: []}
    case LOAD_SERVICES_SUCCESS:
      return {...state, loading: false, data: action.payload}
    case LOAD_SERVICES_FAILED:
      return {...state, loading: false, error: true}
    default:
      return state
  }
}