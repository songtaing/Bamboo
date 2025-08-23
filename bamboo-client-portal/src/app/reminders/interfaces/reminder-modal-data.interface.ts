import { FormModes } from '../../shared/enums/form-modes.enum';
import { IReminder } from './reminder.interface';

export interface IReminderModalData {
  formMode: FormModes;
  reminder?: IReminder;
}
