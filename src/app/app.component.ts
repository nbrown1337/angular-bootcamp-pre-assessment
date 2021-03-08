import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bootcamp-pre-assessment';
  num1 : number;
  num2 : number;
  isNaN: Function = Number.isNaN;
}
