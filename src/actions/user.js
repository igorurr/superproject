import {
  GET_USER_DATA,
  CREATE_GUEST,
  LOGIN,
  LOGOUT
} from '../constants/user';

import {
  request,
  success,
  error
} from './fetchingData';

import { issetSession, getSession, setSession, cleareSession } from '../helpers/userSession'

import { clearePage2Content } from './page2Content'

import {
  logoutUserFromServer,
  receiveFromServerUserLoginPassData,
  receiveFromServerUserSessionData
} from '../helpers/fakeApi'

const actionGetUserData = data  => {
  return {
    type: GET_USER_DATA,
    data
  };
};

const actionLogin = data  => {
  return {
    type: LOGIN,
    data
  };
};

const actionLogout = () => {
  return {
    type: LOGOUT
  };
};



const createGuest = () => {
  return {
    type: CREATE_GUEST
  };
};

export const userLogin = ( login, password, onSuccess, onError ) => async (dispatch) => {
  if( issetSession() )
    return;

  dispatch(request(LOGIN));

  receiveFromServerUserLoginPassData(
    login,
    password,
    ( user ) => {
      dispatch(success());

      setSession( user.session );
      dispatch( actionLogin( user ) );

      onSuccess( user );
    },
    ( errorData ) => {
      dispatch(error());

      onError( errorData );
    }
  );
};

export const userLogout = () => async (dispatch) => {
  if( !issetSession() )
    return;

  dispatch(request(LOGOUT));

  logoutUserFromServer(
    () => {
      dispatch(success());
      cleareSession();
      dispatch(actionLogout());
      dispatch(clearePage2Content());
    }
  );
};

export const getUserData = ( onSuccess, onError ) => async (dispatch) => {
  if( !issetSession() ) {
    dispatch(createGuest());
    return;
  }

  dispatch(request(GET_USER_DATA));

  receiveFromServerUserSessionData(
    getSession(),
    ( user ) => {
      dispatch(success());
      dispatch(actionGetUserData(user));

      if(onSuccess)
        onSuccess();
    },
    ( errorData ) => {
      dispatch(error());

      cleareSession();

      onError( errorData );
    },
  );
};