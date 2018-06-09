import { Action } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './actions';


export function reducer(state:number = 0, action: Action) {
    console.log(action.type , state);
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}
