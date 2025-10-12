import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../shared/classes/base-service.class';
import { DurationUnits } from '../../shared/enums/duration-units.enum';
import { IDataFilter } from '../../shared/interfaces/filters/data-filter.interface';
import { IPayload } from '../../shared/interfaces/payload.interface';
import { ISchedule } from '../../shared/interfaces/schedule.interface';
import { LogService } from '../../shared/services/log.service';
import { IReminderSearchFilter } from '../interfaces/reminder-search-filter.interface';
import { IReminderService } from '../interfaces/reminder-service.interface';
import { IReminder } from '../interfaces/reminder.interface';

@Injectable({
  providedIn: 'root',
})
export class ReminderService
  extends BaseService<IReminder, string>
  implements IReminderService
{
  private _mockRepo: IReminder[] = [];

  constructor(logService: LogService, http: HttpClient) {
    super(logService, `${environment.apiDomainUri}/reminders`, http);
    this.logTraceFrame();
    this.generateMockRepo();
  }

  validateReminder(reminder: IReminder): Observable<boolean> {
    this.logTraceFrame();

    let results: boolean = false;

    if (reminder.title && reminder.schedule) {
      if (
        reminder.schedule.endDate &&
        reminder.schedule.startDate &&
        reminder.schedule.startDate <= reminder.schedule.endDate
      ) {
        results = true;
      }
    }

    return of(results);
  }

  generateMockRepo(): void {
    this.logTraceFrame();

    for (let x = 1; x <= 10; x++) {
      this._mockRepo.push({
        reminderId: this._generateGUID(),
        title: `Mock Reminder ${x}`,
        schedule: this._generateSchedule(),
        category: {
          categoryId: this._generateGUID(),
          categoryName: 'Other',
        },
      });
    }
  }

  private _generateGUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r: number = (Math.random() * 16) | 0;
      const v: number = c === 'x' ? r : (r & 0x3) | 0x8;

      return v.toString(16);
    });
  }

  private _generateRandomDateByRange(start: Date, end: Date): Date {
    const fromTime = start.getTime();
    const toTime = end.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
  }

  private _generateSchedule(): ISchedule {
    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - Math.random() * 10);

    // NOTE: static schedule
    const staticStartDate = new Date();
    staticStartDate.setFullYear(2025, 10, 11);

    return {
      startDate: staticStartDate,
      endDate: new Date(),
      isAllDay: false,
      isRecurring: true,
      frequency: DurationUnits.Days,
      frequencyInterval: 2,
    };

    // NOTE: dynamic schedule
    // return {
    //   startDate: this._generateRandomDateByRange(lastWeek, new Date()),
    //   endDate: new Date(),
    //   isRecurring: true,
    //   frequency: this._generateRandomNumberByRange(1, 4),
    //   frequencyInterval: this._generateRandomNumberByRange(1, 4),
    // };
  }

  private _generateRandomNumberByRange(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  override getAll(): Observable<IReminder[]> {
    this.logTraceFrame();

    return of(this._mockRepo);
  }

  override search(
    filter: IDataFilter<IReminderSearchFilter>
  ): Observable<IPayload<IReminder>> {
    const start: number = filter.pageIndex * filter.pageSize;
    const end: number = start + filter.pageSize;

    const payload: IPayload<IReminder> = {
      results: this._mockRepo.slice(start, end),
      totalCount: this._mockRepo.length,
    };

    return of(payload);
  }
}
