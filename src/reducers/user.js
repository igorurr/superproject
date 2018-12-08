import {
  GET_USER_DATA,
  CREATE_GUEST,
  LOGIN,
  LOGOUT
} from '../constants/user';

const initialState = {
  data: {},
  firstLoad: true
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return {
        ...state,
        data: action.data,
        firstLoad: false
      };
    case CREATE_GUEST:
      return {
        ...state,
        data: {},
        firstLoad: false
      };
    case LOGIN:
      return {
        ...state,
        data: action.data,
        firstLoad: false
      };
    case LOGOUT:
      return {
        ...state,
        data: {}
      };
    default:
      return state;
  }
};

export default user;
