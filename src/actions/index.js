export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const REMOVE_MENU_ITEM = 'REMOVE_MENU_ITEM';

export function addMenuItem(item) {
  const action = {
    type: ADD_MENU_ITEM,
    item
  }
  return action;
}

export function removeMenuItem(item) {
  const action = {
    type: REMOVE_MENU_ITEM,
    item
  }
  return action;
}
