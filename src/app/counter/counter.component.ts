import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';


@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  count: number = 0;
  disableDecrement: boolean = true;

  constructor(private counterService: CounterService) {}

  updateDecrementDisabled(){
    if (this.count === 0) {
      this.disableDecrement = true;
    } else {
    this.disableDecrement = false;
    }
  }

  increment() {
    this.count = this.counterService.incrementCount();
    this.updateDecrementDisabled();
  }

  decrement() {
    this.count = this.counterService.decrementCount();
    this.updateDecrementDisabled();
  }

  ngOnInit(): void {
    this.count = this.counterService.getCount();
  }
}
