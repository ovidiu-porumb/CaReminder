import { Injectable } from '@angular/core';

import { Reminder} from './reminder.model';
import { REMINDERS } from './mock-reminders';


@Injectable()
export class RemindersService {

  reminders: Array<Reminder>;

  constructor() {
    this.reminders = REMINDERS;
   }

  getReminders(): Array<Reminder> {
    return this.reminders;
  }
}
