import { 
  LOAD_CURRENT_SERVICE, 
  LOAD_CURRENT_SERVICE_FAILED, 
  LOAD_CURRENT_SERVICE_SUCCESS 
} from "../actions/actionType"

const initialState = {
  data: [],
  loading: false,
  error: false
} 

export default function loadCurrentServiceReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_CURRENT_SERVICE:
      return {data: [], loading: true, error: false}
    case LOAD_CURRENT_SERVICE_SUCCESS:
      return {...state, loading: false, data: action.payload}
    case LOAD_CURRENT_SERVICE_FAILED:
      return {...state, loading: false, error: true}
    default:
      return state
  }
}