import { Injectable } from '@angular/core';

import { Reminder} from './reminder.model';
import { REMINDERS } from './mock-reminders';


@Injectable()
export class RemindersService {

  reminders: Array<Reminder>;

  constructor() {
   }

  getReminders(): Array<Reminder> {
    this.reminders = REMINDERS;
    return this.reminders;
  }
}
