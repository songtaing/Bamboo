import { ISchedule } from '../../shared/interfaces/schedule.interface';
import { IReminderCategory } from './reminder-category.interface';

export interface IReminder {
  reminderId: string;
  title: string;
  description?: string;
  schedule: ISchedule;
  categoryId: string;
}
