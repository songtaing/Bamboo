import { JsonPipe } from '@angular/common';
import { Component, effect, inject, model, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToastrService } from 'ngx-toastr';
import { DatePickerModule } from 'primeng/datepicker';
import { BaseComponent } from '../../shared/classes/base-component.class';
import { FormModes } from '../../shared/enums/form-modes.enum';
import { ISchedule } from '../../shared/interfaces/schedule.interface';
import { LogService } from '../../shared/services/log.service';
import { IReminderModalData } from '../interfaces/reminder-modal-data.interface';
import { IReminder } from '../interfaces/reminder.interface';
import { ReminderService } from '../services/reminder.service';

@Component({
  selector: 'app-reminder-modal',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    JsonPipe,
    DatePickerModule,
    FormsModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  templateUrl: './reminder-modal.component.html',
  styleUrl: './reminder-modal.component.scss',
})
export class ReminderModalComponent extends BaseComponent implements OnInit {
  readonly data: IReminderModalData = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<ReminderModalComponent>);
  readonly reminderService = inject(ReminderService);
  readonly toastr = inject(ToastrService);

  isAllDay = model<boolean>(false);
  isRecurring = model<boolean>(false);
  isRange = model<boolean>(false);
  startDate?: Date;
  endDate?: Date;
  startDateLabelText: string = 'Date';
  title!: string;
  isShowTime: boolean = true;

  reminderForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  constructor(logService: LogService) {
    super(logService);
    this.logTraceFrame();

    effect(() => {
      this.startDateLabelText = this.isRange() ? 'Start Date' : 'Date';
    });
  }

  ngOnInit(): void {
    this.logTraceFrame();

    this.bindEvents();
    this.title = this.getTitle();
  }

  bindEvents(): void {
    this.logTraceFrame();

    this.isAllDay.subscribe((x) => {
      this.isShowTime = !this.isAllDay;
    });
  }

  getTitle(): string {
    this.logTraceFrame();

    return this.data.formMode === FormModes.Create
      ? 'Create Reminder'
      : 'Update Reminder';
  }

  handleInvalidForm(): void {
    this.logTraceFrame();
  }

  validateForm(): boolean {
    this.logTraceFrame();

    let valid: boolean = this.reminderForm.valid && this.startDate != undefined;

    if (this.isRange() && this.startDate && this.endDate) {
      valid = valid && this.startDate <= this.endDate;
    }

    return valid;
  }

  onSave(): void {
    this.logTraceFrame();

    if (!this.validateForm()) {
      return;
    }

    let schedule: ISchedule = {
      startDate: this.startDate as Date,
      endDate: this.endDate,
      isAllDay: this.isAllDay(),
      isRecurring: this.isRecurring(),
    };

    let reminder: IReminder = {
      reminderId: '',
      title: '',
      schedule: schedule,
    };

    if (this.data.reminder) {
      reminder.reminderId = this.data.reminder.reminderId;
    }

    if (this.reminderService.validateReminder(reminder))
      this.dialogRef.close({ reminder });
  }
}
