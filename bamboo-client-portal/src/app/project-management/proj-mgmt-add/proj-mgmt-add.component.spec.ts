import { ComponentFixture, TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideToastr } from 'ngx-toastr';
import { ProjMgmtAddComponent } from './proj-mgmt-add.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ProjMgmtAddComponent', () => {
  let component: ProjMgmtAddComponent;
  let fixture: ComponentFixture<ProjMgmtAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjMgmtAddComponent, NoopAnimationsModule],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideToastr(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjMgmtAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
