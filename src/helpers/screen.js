export const isMobileScreen  = ( value ) =>
  ( value === undefined ) ?
    document.body.clientWidth < 500 :
    value < 500;