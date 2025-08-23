import { ISchedule } from '../../shared/interfaces/schedule.interface';

export interface IReminder {
  reminderId: string;
  title: string;
  description?: string;
  schedule: ISchedule;
}
