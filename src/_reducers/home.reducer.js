import { homeConstants } from '../_constants';

export function homes(state = {}, action) {
  switch (action.type) {
    case homeConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case homeConstants.GETALL_SUCCESS:
      return {
        items: action.homes
      };
    case homeConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}