import { Component, OnInit } from '@angular/core';
import { Reminder } from './reminder.model';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css']
})
export class RemindersComponent implements OnInit {

  reminder: Reminder = {
    id: 1,
    title: 'First Reminder',
    date: new Date()
  }

  constructor() { }

  ngOnInit() {
  }

}
