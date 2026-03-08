import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardTileComponent } from './mat-card-tile.component';
import { CarouselItem } from '../classes/carousel-item.class';

describe('MatCardTileComponent', () => {
  let component: MatCardTileComponent;
  let fixture: ComponentFixture<MatCardTileComponent>;
  let itemMock: CarouselItem<unknown> = {
    id: '1',
    title: 'hello world',
    html: '<span>1</span>',
    data: null,
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatCardTileComponent);
    component = fixture.componentInstance;
    component.item = itemMock;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
