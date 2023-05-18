import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {


  title = 'automationApp';
  public counter: number = 10;

  increaseBy():void {this.counter = this.counter +1; }

  decreaseBy():void {this.counter = this.counter -1; }

  toCero():void {this.counter = 0; }

}
