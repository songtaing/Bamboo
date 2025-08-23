import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
        {
          provide: MAT_DIALOG_DATA,
          useValue: dialogDataMock,
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
