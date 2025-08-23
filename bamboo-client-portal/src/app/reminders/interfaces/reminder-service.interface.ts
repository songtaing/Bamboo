import { Observable } from 'rxjs';
import { IService } from '../../shared/interfaces/service.interface';
import { IReminder } from './reminder.interface';

export interface IReminderService extends IService<IReminder, string> {
  validateReminder(reminder: IReminder): Observable<boolean>;
}
