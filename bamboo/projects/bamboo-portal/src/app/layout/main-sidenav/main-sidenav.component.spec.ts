import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSidenavComponent } from './main-sidenav.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('MainSidenavComponent', () => {
  let component: MainSidenavComponent;
  let fixture: ComponentFixture<MainSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSidenavComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(MainSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
