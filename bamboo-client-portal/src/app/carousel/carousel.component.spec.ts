import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ICarouselConfig } from '../carousel/interfaces/carousel-config.interface';
import { CarouselComponent } from './carousel.component';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let configMock: ICarouselConfig<any> = {
    items: [],
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    component.config = configMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
