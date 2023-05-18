import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'automationApp';
  public counter: number = 10;

  increaseBy():void {this.counter = this.counter +1; }

  decreaseBy():void {this.counter = this.counter -1; }

  toCero():void {this.counter = 0; }




}



