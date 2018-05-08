import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Reminder } from './reminder.model';
import { REMINDERS } from './mock-reminders';


@Injectable()
export class RemindersService {

  reminders: Array<Reminder>;

  constructor() {
  }

  // todo: this uses http://reactivex.io/rxjs/ ; need to learn it
  getReminders(): Observable<Array<Reminder>> {
    this.reminders = REMINDERS;
    return of(this.reminders);
  }
}
