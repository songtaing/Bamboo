import { DurationUnits } from '../enums/duration-units.enum';

export interface ISchedule {
  startDate: Date;
  endDate?: Date;
  isAllDay: boolean;
  isRecurring: boolean;
  frequency?: DurationUnits;
  frequencyInterval?: number;
}
