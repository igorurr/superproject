export const issetSession = () =>
  typeof localStorage.session === 'string';

export const getSession  = () =>
  typeof localStorage.session === 'string' ? localStorage.getItem('session') : '';

export const setSession  = ( newSession ) =>
  localStorage.setItem('session', newSession);

export const cleareSession  = () =>
  localStorage.removeItem('session');
