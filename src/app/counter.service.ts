import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  constructor() {}

  private count: number = 0;

  getCount(): number {
    return this.count;
  }

  incrementCount(): number {
    return ++this.count;
  }

  decrementCount(): number {
    return --this.count;
  }
}
