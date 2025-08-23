import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingIndicatorComponent } from './loading-indicator.component';
import { ILoadingIndicatorConfig } from '../../shared/interfaces/loading-indicator-config.interface';
import { LoadingIndicatorTypes } from '../../shared/enums/loading-indicator-types.enum';

describe('LoadingIndicatorComponent', () => {
  let component: LoadingIndicatorComponent;
  let fixture: ComponentFixture<LoadingIndicatorComponent>;
  let configMock: ILoadingIndicatorConfig = {
    type: LoadingIndicatorTypes.Bar,
    mode: 'determinate',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingIndicatorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingIndicatorComponent);
    component = fixture.componentInstance;
    component.config = configMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
