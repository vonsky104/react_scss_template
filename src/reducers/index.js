import { combineReducers } from 'redux';
import menu_json from '../data/menu.json';

import { ADD_MENU_ITEM, REMOVE_MENU_ITEM } from '../actions';

function menuItem(state = menu_json, action) {
  switch(action.type) {
    case ADD_MENU_ITEM:
      state = [...state, action.item];
      return state;
    case REMOVE_MENU_ITEM:
      let menu =  state.filter(it => it.id !== action.item.id)
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  menuItem
})

export default rootReducer;
