import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "./counter.actions";

@Component({
  selector: 'app-store-driven-counter',
  templateUrl: './store-driven-counter.component.html',
  styleUrls: ['./store-driven-counter.component.css']
})
export class StoreDrivenCounterComponent {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
   this.store.dispatch(reset());
  }
}
