import { userGroups } from '../../../constants/user';


/*
  group: {
    id: 1,
    parent: 0,    // позиция в текущем списке групп
    name: 'Г1.1'
  }
*/


// для огромныx деревьев групп требуется оптимизация
export const checkUserGroup = ( groupId, userGroupId ) => {
  if( groupId === userGroupId )
    return true;

  let curGroup = userGroups.find( (el) => el.id === userGroupId );

  while( 'parent' in curGroup ) {
    curGroup = userGroups.find( (el) => el.id === curGroup.parent );

    if( groupId === curGroup.id )
      return true;
  }

  return false;
};