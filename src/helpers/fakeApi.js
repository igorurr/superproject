import { users, contentPage2 } from '../constants/fakeApi'





export const receiveFromServerUserLoginPassData = ( login, pass, success, faile ) => {
  setTimeout( () => {
    const user = users.find( (el) => el.login === login );

    if( user === undefined ) {
      faile ({
        login: 'такого логина не существует'
      });
      return;
    }

    if( user.password !== pass ) {
      faile ({
        password: 'пароль не верный'
      });
      return;
    }

    success( user );
  }, 1000 );
};

export const receiveFromServerUserSessionData = ( session, success, faile ) => {
  setTimeout( () => {
    const user = users.find( (el) => el.session === session );

    if( user === undefined ) {
      faile ({
        session: 'Сессия отсутствует'
      });
      return;
    }

    success( user );
  }, 1000 );
};

export const logoutUserFromServer = ( success ) => {
  setTimeout( () => {
    success();
  }, 1000 );
};

export const receiveFromServerPage2Content = ( success ) => {
  setTimeout( () => {
    success( contentPage2 );
  }, 1000 );
};

export const pushDeleteFromServerMediaOnPage2Content = ( id, success ) => {
  setTimeout( () => {
    success( id );
  }, 1000 );
};