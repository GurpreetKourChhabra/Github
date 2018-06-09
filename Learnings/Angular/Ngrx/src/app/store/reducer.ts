import { Action } from '@ngrx/store';
import {ADD_STUDENT,DISPLAY_STUDENT,DELETE_STUDENT ,EDIT_STUDENT} from './constant';

export function student( state = [], action) {
    switch(action.type) {
        case ADD_STUDENT:
            return [...state, action.payload];
        case EDIT_STUDENT:
            return state.map((item, index) => {
                return item.name === action.payload.name
                  ? Object.assign({}, item,  action.payload )
                  : item;
              });
         case DELETE_STUDENT:
            return state.filter((item, index) => index !== state.indexOf(action.payload));
        default:
        return state;
    }
}
