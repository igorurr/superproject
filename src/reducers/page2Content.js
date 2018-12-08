import {
  GET_PAGE_2_CONTENT,
  CLEARE_PAGE_2_CONTENT,
  REMOVE_PAGE_2_ELEMENT
} from '../constants/page2Content';

const initialState = {
  data: [],
  wasLoading: false
};

const fetchingData = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAGE_2_CONTENT:
      return {
        ...state,
        data: action.data,
        wasLoading: true
      };
    case CLEARE_PAGE_2_CONTENT:
      return {
        ...state,
        data: [],
        wasLoading: false
      };
    case REMOVE_PAGE_2_ELEMENT:
      return {
        ...state,
        data: state.data.filter( el => el.id !== action.id )
      };
    default:
      return state;
  }
};

export default fetchingData;
