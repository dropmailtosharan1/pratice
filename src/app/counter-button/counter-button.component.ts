import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from '../counter/store/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {
value!:number
  constructor(private store:Store){

  }
  onIncrement(){
    this.store.dispatch(increment())
  }
  onDecrement(){
    this.store.dispatch(decrement())
  }
  onReset(){
    this.store.dispatch(reset())
  }
  customIncrement(){
    this.store.dispatch(customIncrement({value:+this.value}))
  }
}
