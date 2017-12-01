import { Component, OnInit } from '@angular/core';
import { Reminder } from './reminder.model';
import { Summary } from './summary.model';
import { RemindersService} from './reminders.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.css'],
  providers: [RemindersService]
})

export class RemindersComponent implements OnInit {

  summary: Summary = {
    todayDate: new Date(),
    numberOfExpiredTaxes: 3,
    totalNumberOfTaxes: 6
  };
  reminders: Array<Reminder>;
  selectedReminder: Reminder;

  constructor(private remindersService: RemindersService) {
  }

  ngOnInit() {
    this.remindersService.getReminders()
    .subscribe(reminders => this.reminders = reminders);
  }

  onSelect(reminder: Reminder): void {
    this.selectedReminder = reminder;
  }
}
