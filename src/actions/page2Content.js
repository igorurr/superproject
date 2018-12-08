import {
  GET_PAGE_2_CONTENT,
  CLEARE_PAGE_2_CONTENT,
  REMOVE_PAGE_2_ELEMENT
} from '../constants/page2Content';

import {
  receiveFromServerPage2Content,
  pushDeleteFromServerMediaOnPage2Content
} from "../helpers/fakeApi";

import { request, success } from "./fetchingData";



const actionGetPage2Content = ( data ) => {
  return {
    type: GET_PAGE_2_CONTENT,
    data
  };
};

const actionRemovePage2Content = ( id ) => {
  return {
    type: REMOVE_PAGE_2_ELEMENT,
    id
  };
};



export const clearePage2Content = () => {
  return {
    type: CLEARE_PAGE_2_CONTENT
  };
};
export const getPage2Content = ( onSuccess ) => async (dispatch) => {
  dispatch(request(GET_PAGE_2_CONTENT));

  receiveFromServerPage2Content(
    ( data ) => {
      dispatch(success());

      dispatch( actionGetPage2Content( data ) );

      if( onSuccess )
        onSuccess( data );
    }
  );
};

export const removePage2Content = ( id, onSuccess ) => async (dispatch) => {
  dispatch(request(REMOVE_PAGE_2_ELEMENT));

  pushDeleteFromServerMediaOnPage2Content(
    id,
    () => {
      dispatch(success());

      dispatch( actionRemovePage2Content( id ) );

      if( onSuccess )
        onSuccess( id );
    }
  );
};