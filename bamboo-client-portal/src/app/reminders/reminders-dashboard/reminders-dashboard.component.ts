import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { DurationUnits } from '../../shared/enums/duration-units.enum';
import { LogService } from '../../shared/services/log.service';
import { IReminder } from '../interfaces/reminder.interface';
import { ReminderService } from '../services/reminder.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ReminderModalComponent } from '../reminder-modal/reminder-modal.component';
import { IReminderModalData } from '../interfaces/reminder-modal-data.interface';
import { FormModes } from '../../shared/enums/form-modes.enum';

@Component({
  selector: 'app-reminders-dashboard',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatToolbarModule],
  templateUrl: './reminders-dashboard.component.html',
  styleUrl: './reminders-dashboard.component.scss',
})
export class RemindersDashboardComponent extends BaseComponent {
  readonly dialog = inject(MatDialog);
  reminders: IReminder[] = [];
  todayReminders!: IReminder[];

  constructor(
    logService: LogService,
    protected reminderService: ReminderService
  ) {
    super(logService);
    this.logTraceFrame();

    reminderService.getAll().subscribe((reminders) => {
      this.reminders = reminders;
      this.processReminders(reminders);
    });
  }

  processReminders(reminders: IReminder[]): void {
    this.logTraceFrame();

    this.todayReminders = this.getTodayReminders(reminders);
  }

  getTodayReminders(reminders: IReminder[]): IReminder[] {
    this.logTraceFrame();

    let foundReminders: IReminder[] = [];
    let leftoverReminders: IReminder[] = [];

    reminders.sort((a, b) => {
      return a.schedule.startDate.getDate() < b.schedule.startDate.getDate()
        ? -1
        : 1;
    });

    foundReminders.push(
      ...reminders.filter(
        (x) => x.schedule.startDate.getDate() === new Date().getDate()
      )
    );

    leftoverReminders.push(
      ...reminders.filter(
        (x) => x.schedule.startDate.getDate() !== new Date().getDate()
      )
    );

    //find all recurring hit date
    leftoverReminders.forEach((reminder) => {
      if (
        reminder.schedule.isRecurring &&
        reminder.schedule.startDate.getDate() < new Date().getDate()
      ) {
        let nextDate = new Date(reminder.schedule.startDate);
        while (nextDate < new Date()) {
          switch (reminder.schedule.frequency) {
            case DurationUnits.Days:
              nextDate.setDate(
                nextDate.getDate() + reminder.schedule.frequencyInterval!
              );
              break;
            case DurationUnits.Weeks:
              nextDate.setDate(
                nextDate.getDate() + reminder.schedule.frequencyInterval! * 7
              );
              break;
            case DurationUnits.Months:
              nextDate.setMonth(
                nextDate.getMonth() + reminder.schedule.frequencyInterval!
              );
              break;
            case DurationUnits.Years:
              nextDate.setFullYear(
                nextDate.getFullYear() + reminder.schedule.frequencyInterval!
              );
              break;
            case DurationUnits.Seconds:
              nextDate.setSeconds(
                nextDate.getSeconds() + reminder.schedule.frequencyInterval!
              );
              break;
            case DurationUnits.Minutes:
              nextDate.setMinutes(
                nextDate.getMinutes() + reminder.schedule.frequencyInterval!
              );
              break;
            case DurationUnits.Hours:
              nextDate.setHours(
                nextDate.getHours() + reminder.schedule.frequencyInterval!
              );
              break;
            default:
              throw new Error('Invalid frequency unit');
          }

          if (nextDate.getDate() === new Date().getDate()) {
            foundReminders.push(reminder);
          }
        }
      }
    });

    return foundReminders;
  }

  onAdd(): void {
    this.logTraceFrame();

    let modalData: IReminderModalData = {
      formMode: FormModes.Create,
    };

    const dialogRef = this.dialog.open(ReminderModalComponent, {
      data: modalData,
      height: '95vh',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.reminderService.add(result).subscribe(
        (x) => {},
        (err) => {}
      );
    });
  }
}
