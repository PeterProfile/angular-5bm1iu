import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <span [style.border]="myBorder">Hey there</span>
  <div [style.color]="twoColors? 'blue':'forestgreen'">
  what color am I
  </div>
  <button (click)="changeColor()">click me</button>
  `
})
export class AppComponent  {
  myBorder="1px solid black"
  twoColors: true;
  changeColor= function(){
    this.twoColors = !this.twoColors;
  }
}
