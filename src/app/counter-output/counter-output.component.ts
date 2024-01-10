import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  counter!: number;
  constructor(private store: Store<{ counter: { counter: number } }>) {
    this.store.select('counter').subscribe((res) => {
      this.counter = res.counter;
    });
  }
}
