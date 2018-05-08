import {
    Reminder
} from './reminder.model';


export const REMINDERS: Array<Reminder> = [{
    id: 1,
    title: 'RCA',
    status: "unknown",
    validUntil: new Date(2018, 9, 20),
    isExpired: Reminder.prototype.isExpired    
},
{
    id: 2,
    title: 'Rovignette',
    status: "unknown",
    validUntil: new Date(2019, 2, 20),
    isExpired: Reminder.prototype.isExpired
},
{
    id: 3,
    title: 'ITP',
    status: "unknown",
    validUntil: new Date(2015, 5, 10),
    isExpired: Reminder.prototype.isExpired
},
{
    id: 4,
    title: 'CASCO',
    status: "unknown",
    validUntil: new Date(2017, 5, 1),
    isExpired: Reminder.prototype.isExpired
}];
