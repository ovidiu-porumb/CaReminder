export interface IReminder {
    id: number;
    validUntil: Date;
    status: string;
    title: string;

    
    // this is why it fails - because we have the method on the interface..
    // https://stackoverflow.com/questions/47239507/property-getreadableschedule-is-missing-in-type 
    //isExpired(): boolean;
}

export class Reminder implements IReminder {
    isExpired(): boolean {
        // how is it possible to STILL be SO HARD to compare dates in JS??
        return new Date().getTime() > this.validUntil.getTime();
    }
    id: number;
    status: string;
    title: string;
    validUntil: Date;
}
