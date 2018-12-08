import {
  REQUEST,
  SUCCESS,
  ERROR
} from '../constants/fetchingData';

const initialState = {
  fetching: false,
  isError: false
};

const fetchingData = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        fetching: true,
        isError: false,
        requestType: action.requestType
      };
    case SUCCESS:
      return {
        ...state,
        fetching: false,
        isError: false
      };
    case ERROR:
      return {
        ...state,
        fetching: false,
        isError: true
      };
    default:
      return state;
  }
};

export default fetchingData;
