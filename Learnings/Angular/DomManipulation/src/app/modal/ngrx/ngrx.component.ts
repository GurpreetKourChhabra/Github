import { Component } from '@angular/core';
import {Store , select} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET} from './actions';
import { reducer } from './reducers';

interface AppState {
  count: number;
  // message: string;
}

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.css']
})

export class NgrxComponent {
    count$: Observable<number>;
    constructor(private store: Store<AppState>) {

        console.log(this.store);
    this.count$ = this.store.select('count');

  }
  increment(){
     this.store.dispatch({ type: INCREMENT });
     console.log(this.count$);
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }
}
