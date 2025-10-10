import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { FormModes } from '../../shared/enums/form-modes.enum';
import { IReminderModalData } from '../interfaces/reminder-modal-data.interface';
import { ReminderModalComponent } from './reminder-modal.component';

describe('ReminderModalComponent', () => {
  let component: ReminderModalComponent;
  let fixture: ComponentFixture<ReminderModalComponent>;
  let dialogDataMock: IReminderModalData = {
    formMode: FormModes.Create,
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReminderModalComponent, NoopAnimationsModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideToastr(),
        {
          provide: MAT_DIALOG_DATA,
          useValue: dialogDataMock,
        },
        {
          provide: MatDialogRef,
          useValue: {},
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ReminderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
