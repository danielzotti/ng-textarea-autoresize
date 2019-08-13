import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = 'This is a test!';
  htmlText = '<textarea [autoresize]="text" name="text" [(ngModel)]="text" autoresizeMaxHeight="300"></textarea>';
}
