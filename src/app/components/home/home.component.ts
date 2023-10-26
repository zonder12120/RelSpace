import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  releaseNumber: string = 'Release XXX3';
  releaseStatus: string = 'Установка на ПРОД';
  weekData: object = {};

  receiveWeekData(weekData: Object) {
    this.weekData = weekData;
    console.log(weekData);
  }
}
