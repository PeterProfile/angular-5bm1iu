import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <span [style.border]="myBorder">Hey there</span>
  <div [style.color]="twoColors? 'blue':'forestgreen'">
  what color am I
  </div>
  <button (click)="changeColor()">click me</button><br>
  <input [(ngModel)]="text"><br>
  <input bindon-ngModel="text"><br>
  <input [value]="text" (input)="text=$event.target.valu
  <h1>{{text}}</h1>
  `
})
export class AppComponent  {
  myBorder="1px solid black"
  twoColors: true;
  changeColor= function(){
    this.twoColors = !this.twoColors;
  }
  text: string="some text here";
}
