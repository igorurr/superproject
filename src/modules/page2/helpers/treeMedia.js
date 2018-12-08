/*
    node: {
      parent:   number, // элемент массива node, если отсутствует, либо вне диаппазона массива - вставляется на выxод, иначе в массив parent элемента number
      icon:     string,
      header:   string,
      content:  string
    }
*/

const getParent  = ( node, array ) => {
  if ( 'parent' in node && typeof node.parent === 'number' )
    return array.find( el => el.id === node.parent );
  else
    return null;
};

export const normalToRecurrentTree  = ( input ) => {
  let output = [];

  input.forEach( (el,i) => el.childs = [] );

  input.forEach( (el) => {
    const parentObj = getParent(el,input);
    if( parentObj ) {
      parentObj.childs.push(el);
    }
    else
      output.push(el);
  } );

  return output;
};