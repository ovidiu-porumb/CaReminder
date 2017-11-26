import { Component, OnInit } from '@angular/core';
import { Reminder } from './reminder.model';
import { Summary } from './summary.model';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  summary: Summary = {
    todayDate: new Date(),
    numberOfExpiredTaxes: 3,
    totalNumberOfTaxes: 6
  };
  reminder: Reminder = {
    id: 1,
    title: 'First Reminder',
    date: new Date()
  };

  constructor() { }

  ngOnInit() {
  }

}
